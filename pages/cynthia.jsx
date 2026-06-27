import React, { useState, useEffect, useMemo, useCallback } from "react";
import Head from "next/head";
import emailjs from "@emailjs/browser";

/* ------------------------------------------------------------------ */
/*  Config                                                            */
/* ------------------------------------------------------------------ */

const TARGET = "MARRY";
const MAX_ROWS = 6;

const DATES = [
  { id: "za-11-jul", label: "Zaterdag 11 juli 2026" },
  { id: "zo-12-jul", label: "Zondag 12 juli 2026" },
  { id: "za-18-jul", label: "Zaterdag 18 juli 2026" },
  { id: "zo-19-jul", label: "Zondag 19 juli 2026" },
  { id: "za-25-jul", label: "Zaterdag 25 juli 2026" },
  { id: "zo-26-jul", label: "Zondag 26 juli 2026" },
];

// Deterministic decorative hearts (no Math.random -> no hydration mismatch).
const FLOATING_HEARTS = [
  { left: "6%", top: "18%", size: 34, delay: "0s", emoji: "💖" },
  { left: "16%", top: "70%", size: 26, delay: "1.2s", emoji: "💕" },
  { left: "27%", top: "32%", size: 22, delay: "2.4s", emoji: "🌸" },
  { left: "39%", top: "80%", size: 30, delay: "0.6s", emoji: "💗" },
  { left: "52%", top: "14%", size: 24, delay: "1.8s", emoji: "💞" },
  { left: "63%", top: "60%", size: 36, delay: "0.3s", emoji: "💖" },
  { left: "74%", top: "26%", size: 20, delay: "2.1s", emoji: "🌷" },
  { left: "83%", top: "72%", size: 28, delay: "1.5s", emoji: "💕" },
  { left: "91%", top: "40%", size: 24, delay: "0.9s", emoji: "💗" },
];

const KEY_ROWS = [
  ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  ["ENTER", "Z", "X", "C", "V", "B", "N", "M", "DEL"],
];

const CONFETTI_COLORS = ["#ff5d8f", "#ff8fab", "#ffc2d4", "#ffd6e0", "#ff3d6e", "#ffeb3b"];

/* ------------------------------------------------------------------ */
/*  Cross Math puzzle (crossword-style, 5x5). Left-to-right eval.      */
/*                                                                     */
/*   2 × 3 = 6                                                         */
/*   +   −   +                                                         */
/*   6 ÷ 2 = 3                                                         */
/*   =   =   =                                                         */
/*   8 + 1 = 9                                                         */
/* ------------------------------------------------------------------ */

const CM_SIZE = 5;

// Number cells: "row-col" -> { value, given }. Blanks have given:false.
const CM_NUMBERS = {
  "0-0": { value: 2, given: false },
  "0-2": { value: 3, given: true },
  "0-4": { value: 6, given: true },
  "2-0": { value: 6, given: true },
  "2-2": { value: 2, given: false },
  "2-4": { value: 3, given: false },
  "4-0": { value: 8, given: false },
  "4-2": { value: 1, given: true },
  "4-4": { value: 9, given: false },
};

// Operator cells (row operators + column operators).
const CM_OPS = {
  "0-1": "×",
  "2-1": "÷",
  "4-1": "+",
  "1-0": "+",
  "1-2": "−",
  "1-4": "+",
};

const CM_EQUALS = ["0-3", "2-3", "4-3", "3-0", "3-2", "3-4"];

// Numbers she places into the blanks (matches the 5 blank cells above).
const CM_POOL = [2, 2, 3, 8, 9];

const CM_EQUATIONS = [
  { a: "0-0", op: "×", b: "0-2", r: "0-4" },
  { a: "2-0", op: "÷", b: "2-2", r: "2-4" },
  { a: "4-0", op: "+", b: "4-2", r: "4-4" },
  { a: "0-0", op: "+", b: "2-0", r: "4-0" },
  { a: "0-2", op: "−", b: "2-2", r: "4-2" },
  { a: "0-4", op: "+", b: "2-4", r: "4-4" },
];

const applyOp = (x, op, y) => {
  switch (op) {
    case "+":
      return x + y;
    case "−":
      return x - y;
    case "×":
      return x * y;
    case "÷":
      return y !== 0 ? x / y : NaN;
    default:
      return NaN;
  }
};

/* ------------------------------------------------------------------ */
/*  "Select Fufu" image captcha                                        */
/* ------------------------------------------------------------------ */

const FUFU_IMAGES = [
  "/assets/fufu/IMG_8552.png",
  "/assets/fufu/IMG_8553.png",
  "/assets/fufu/IMG_8554.png",
];

// Look-alike tabby cats that are NOT Fufu.
const FUFU_DECOYS = [
  "/assets/fufu-decoys/decoy1.jpg",
  "/assets/fufu-decoys/decoy2.jpg",
  "/assets/fufu-decoys/decoy3.jpg",
  "/assets/fufu-decoys/decoy4.jpg",
  "/assets/fufu-decoys/decoy5.jpg",
  "/assets/fufu-decoys/decoy6.jpg",
];

const shuffle = (arr) => {
  const a = [...arr];
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
};



/* ------------------------------------------------------------------ */
/*  Helpers                                                           */
/* ------------------------------------------------------------------ */

// Standard Wordle two-pass evaluation (handles the double R in MARRY).
function evaluateGuess(guess, target) {
  const result = Array(5).fill("absent");
  const targetArr = target.split("");
  const used = Array(5).fill(false);

  for (let i = 0; i < 5; i++) {
    if (guess[i] === targetArr[i]) {
      result[i] = "correct";
      used[i] = true;
    }
  }
  for (let i = 0; i < 5; i++) {
    if (result[i] === "correct") continue;
    for (let j = 0; j < 5; j++) {
      if (!used[j] && guess[i] === targetArr[j]) {
        result[i] = "present";
        used[j] = true;
        break;
      }
    }
  }
  return result;
}

const tileColor = (status) => {
  switch (status) {
    case "correct":
      return "bg-gradient-to-br from-rose-400 to-pink-600 text-white border-pink-600";
    case "present":
      return "bg-gradient-to-br from-amber-300 to-amber-400 text-white border-amber-400";
    case "absent":
      return "bg-pink-200/70 text-pink-700 border-pink-200";
    default:
      return "bg-white/80 text-pink-700 border-pink-300";
  }
};

/* ------------------------------------------------------------------ */
/*  Page                                                              */
/* ------------------------------------------------------------------ */

const Cynthia = () => {
  const [mounted, setMounted] = useState(false);
  const [step, setStep] = useState("invite"); // invite | wordle | crossmath | fufu | picker | done

  useEffect(() => setMounted(true), []);

  const gameIndex = { wordle: 1, crossmath: 2, fufu: 3 }[step];
  const isGame = Boolean(gameIndex);

  return (
    <div className="cynthia-bg relative min-h-screen w-full overflow-hidden flex items-center justify-center px-4 py-10 text-pink-900">
      <Head>
        <title>💌 Voor Cynthia</title>
        <meta name="robots" content="noindex, nofollow" />
      </Head>

      {/* Decorative floating hearts */}
      {FLOATING_HEARTS.map((h, i) => (
        <span
          key={i}
          className="cynthia-anim-float-slow pointer-events-none absolute select-none"
          style={{
            left: h.left,
            top: h.top,
            fontSize: `${h.size}px`,
            animationDelay: h.delay,
          }}
        >
          {h.emoji}
        </span>
      ))}

      <div
        className={`relative z-10 w-full ${isGame ? "max-w-5xl" : "max-w-3xl"}`}
      >
        {isGame && <GameProgress current={gameIndex} />}
        {step === "invite" && <InviteStep onYes={() => setStep("wordle")} />}
        {step === "wordle" && (
          <WordleStep
            onSolved={() => setStep("crossmath")}
            onBack={() => setStep("invite")}
          />
        )}
        {step === "crossmath" && (
          <CrossMathStep
            onSolved={() => setStep("fufu")}
            onBack={() => setStep("wordle")}
          />
        )}
        {step === "fufu" && (
          <FufuStep
            onSolved={() => setStep("picker")}
            onBack={() => setStep("crossmath")}
          />
        )}
        {step === "picker" && (
          <PickerStep
            onDone={() => setStep("done")}
            onBack={() => setStep("fufu")}
          />
        )}
        {step === "done" && <DoneStep mounted={mounted} />}
      </div>
    </div>
  );
};

export default Cynthia;

/* ------------------------------------------------------------------ */
/*  Shared — back arrow                                               */
/* ------------------------------------------------------------------ */

const BackButton = ({ onClick }) => (
  <button
    type="button"
    onClick={onClick}
    aria-label="Ga terug"
    className="normal-case absolute left-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white text-xl !text-pink-500 shadow-md shadow-pink-200 transition-transform hover:scale-110 hover:!text-rose-500"
  >
    ←
  </button>
);

/* ------------------------------------------------------------------ */
/*  Shared — game progress bar                                        */
/* ------------------------------------------------------------------ */

const GameProgress = ({ current, total = 3 }) => (
  <div className="cynthia-anim-fade-up mx-auto mb-4 w-full max-w-md">
    <div className="mb-1.5 flex items-center justify-between text-sm font-bold text-pink-700">
      <span>
        Spelletje {current}/{total}
      </span>
      <span className="tracking-widest">
        {Array.from({ length: total })
          .map((_, i) => (i < current ? "💗" : "🤍"))
          .join(" ")}
      </span>
    </div>
    <div className="h-3 w-full overflow-hidden rounded-full bg-white/70 shadow-inner">
      <div
        className="h-full rounded-full bg-gradient-to-r from-pink-500 to-rose-500 transition-all duration-700 ease-out"
        style={{ width: `${(current / total) * 100}%` }}
      />
    </div>
  </div>
);

/* ------------------------------------------------------------------ */
/*  Step 1 — Invite                                                   */
/* ------------------------------------------------------------------ */

const InviteStep = ({ onYes }) => {
  const [noPos, setNoPos] = useState({ x: 0, y: 0 });
  const [dodges, setDodges] = useState(0);

  const dodge = () => {
    const x = (Math.random() - 0.5) * 460;
    const y = (Math.random() - 0.5) * 320;
    setNoPos({ x, y });
    setDodges((d) => d + 1);
  };

  const noText =
    dodges === 0
      ? "Nee"
      : ["Nee?", "Echt niet?", "Probeer maar 😉", "Onmogelijk!", "Geef het op 💗", "Nooit!"][
          Math.min(dodges, 5)
        ];

  return (
    <div className="cynthia-anim-fade-up rounded-3xl bg-white/75 p-12 text-center shadow-2xl shadow-pink-300/50 backdrop-blur-md">
      <div className="cynthia-anim-heartbeat mb-6 text-7xl">💝</div>
      <h1 className="mb-4 text-4xl font-extrabold text-pink-600 sm:text-5xl">
        Lieve Cynthia
      </h1>
      <p className="mx-auto mb-2 max-w-xl text-xl leading-relaxed text-pink-800">
        Cynthia, ik vind je <span className="font-bold text-rose-500">érg</span> leuk en
        daarom wil ik je graag meenemen op een date.
      </p>
      <p className="mb-10 text-lg text-pink-700">Wil je met mij op date? 🥰</p>

      <div className="relative flex items-center justify-center gap-6">
        <button
          onClick={onYes}
          className="cynthia-anim-heartbeat normal-case rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-12 py-4 text-xl font-bold !text-white shadow-lg shadow-pink-400/50 transition-transform duration-200 hover:scale-110 hover:!text-white"
        >
          Ja! 💕
        </button>

        <button
          onMouseEnter={dodge}
          onClick={dodge}
          style={{
            transform: `translate(${noPos.x}px, ${noPos.y}px)`,
          }}
          className="normal-case rounded-full bg-white px-10 py-4 text-xl font-bold !text-pink-500 shadow-md shadow-pink-200 transition-transform duration-300 ease-out hover:!text-pink-500"
        >
          {noText}
        </button>
      </div>
      {dodges > 2 && (
        <p className="mt-8 text-sm italic text-pink-500">
          (Tip: die &quot;Nee&quot; knop is nogal verlegen... 😅)
        </p>
      )}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Step 2 — Wordle captcha                                           */
/* ------------------------------------------------------------------ */

const WordleStep = ({ onSolved, onBack }) => {
  const [guesses, setGuesses] = useState([]);
  const [current, setCurrent] = useState("");
  const [won, setWon] = useState(false);
  const [shakeRow, setShakeRow] = useState(false);
  const [showHint, setShowHint] = useState(false);

  const lost = guesses.length >= MAX_ROWS && !won;
  const finished = won || lost;

  // Per-key colours for the on-screen keyboard.
  const keyStatuses = useMemo(() => {
    const map = {};
    const rank = { absent: 0, present: 1, correct: 2 };
    guesses.forEach((g) => {
      const res = evaluateGuess(g, TARGET);
      g.split("").forEach((ch, i) => {
        if (!map[ch] || rank[res[i]] > rank[map[ch]]) map[ch] = res[i];
      });
    });
    return map;
  }, [guesses]);

  const submitGuess = useCallback(() => {
    if (current.length !== 5) {
      setShakeRow(true);
      setTimeout(() => setShakeRow(false), 500);
      return;
    }
    const next = [...guesses, current];
    setGuesses(next);
    if (current === TARGET) setWon(true);
    setCurrent("");
  }, [current, guesses]);

  const press = useCallback(
    (key) => {
      if (finished) return;
      if (key === "ENTER") return submitGuess();
      if (key === "DEL") return setCurrent((c) => c.slice(0, -1));
      if (/^[A-Z]$/.test(key)) setCurrent((c) => (c.length < 5 ? c + key : c));
    },
    [finished, submitGuess]
  );

  // Physical keyboard support.
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Enter") press("ENTER");
      else if (e.key === "Backspace") press("DEL");
      else if (/^[a-zA-Z]$/.test(e.key)) press(e.key.toUpperCase());
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [press]);

  // Advance after winning.
  useEffect(() => {
    if (!won) return;
    const t = setTimeout(onSolved, 3800);
    return () => clearTimeout(t);
  }, [won, onSolved]);

  const reset = () => {
    setGuesses([]);
    setCurrent("");
    setWon(false);
  };

  const rows = [];
  for (let r = 0; r < MAX_ROWS; r++) {
    let letters = ["", "", "", "", ""];
    let statuses = [null, null, null, null, null];
    if (r < guesses.length) {
      letters = guesses[r].split("");
      statuses = evaluateGuess(guesses[r], TARGET);
    } else if (r === guesses.length && !finished) {
      letters = current.padEnd(5, " ").split("").map((c) => (c === " " ? "" : c));
    }
    rows.push({ letters, statuses, submitted: r < guesses.length });
  }

  return (
    <div className="cynthia-anim-fade-up relative rounded-3xl bg-white/80 p-8 text-center shadow-2xl shadow-pink-300/50 backdrop-blur-md">
      {!won && <BackButton onClick={onBack} />}
      <div className="mb-1 text-5xl">🔐</div>
      <h2 className="mb-1 text-2xl font-extrabold text-pink-600 sm:text-3xl">
        Even verifiëren...
      </h2>
      <p className="mb-6 text-pink-700">
        We moeten bevestigen dat dit écht Cynthia is. Raad het woord! 💌
      </p>

      {/* Grid */}
      <div className="mb-5 flex flex-col items-center gap-2">
        {rows.map((row, ri) => (
          <div
            key={ri}
            className={`flex gap-2 ${
              shakeRow && ri === guesses.length ? "cynthia-anim-shake" : ""
            }`}
          >
            {row.letters.map((ch, ci) => (
              <div
                key={ci}
                className={`flex h-16 w-16 items-center justify-center rounded-xl border-2 text-3xl font-extrabold uppercase transition-all duration-300 ${tileColor(
                  row.statuses[ci]
                )} ${row.submitted ? "cynthia-anim-flip" : ch ? "cynthia-anim-pop" : ""}`}
                style={row.submitted ? { animationDelay: `${ci * 0.1}s` } : undefined}
              >
                {ch}
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Status messages */}
      {won && (
        <p className="cynthia-anim-pop mb-4 text-xl font-bold text-rose-500">
          Ja! Dat is echt Cynthia 💍✨ Door naar het volgende spelletje...
        </p>
      )}
      {lost && (
        <p className="mb-4 text-lg font-semibold text-pink-600">
          Bijna! Nog een keertje proberen? Jij kan dit lieverd 💍 — probeer
          opnieuw.
        </p>
      )}

      {/* On-screen keyboard */}
      {!finished && (
        <div className="mb-5 flex flex-col items-center gap-2">
          {KEY_ROWS.map((krow, ki) => (
            <div key={ki} className="flex gap-1.5">
              {krow.map((key) => {
                const st = keyStatuses[key];
                const wide = key === "ENTER" || key === "DEL";
                const base =
                  st === "correct"
                    ? "bg-gradient-to-br from-rose-400 to-pink-600 !text-white"
                    : st === "present"
                    ? "bg-amber-300 !text-white"
                    : st === "absent"
                    ? "bg-pink-200/60 !text-pink-400"
                    : "bg-white !text-pink-600";
                return (
                  <button
                    key={key}
                    onClick={() => press(key)}
                    className={`normal-case rounded-lg px-2.5 py-3 text-sm font-bold shadow-sm transition-transform duration-100 hover:scale-105 ${base} ${
                      wide ? "px-3.5 text-xs" : "min-w-[34px]"
                    }`}
                  >
                    {key === "DEL" ? "⌫" : key === "ENTER" ? "Enter" : key}
                  </button>
                );
              })}
            </div>
          ))}
        </div>
      )}

      {/* Controls */}
      <div className="flex items-center justify-center gap-4">
        {!won && (
          <button
            onClick={() => setShowHint(true)}
            className="normal-case rounded-full bg-white px-6 py-2.5 text-sm font-semibold !text-rose-500 shadow-md shadow-pink-200 transition-transform hover:scale-105 hover:!text-rose-500"
          >
            {showHint ? "💍💎" : "Hint"}
          </button>
        )}
        {finished && !won && (
          <button
            onClick={reset}
            className="normal-case rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-6 py-2.5 text-sm font-bold !text-white shadow-md shadow-pink-300 transition-transform hover:scale-105 hover:!text-white"
          >
            🔁 Probeer opnieuw
          </button>
        )}
      </div>
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Step 3 — Cross Math puzzle                                         */
/* ------------------------------------------------------------------ */

const CrossMathStep = ({ onSolved, onBack }) => {
  const [placements, setPlacements] = useState({}); // cellKey -> pool index
  const [selected, setSelected] = useState(null);
  const [won, setWon] = useState(false);
  const [shake, setShake] = useState(false);

  const blanks = useMemo(
    () => Object.keys(CM_NUMBERS).filter((k) => !CM_NUMBERS[k].given),
    []
  );

  const valAt = (key, pl) => {
    const cell = CM_NUMBERS[key];
    if (!cell) return null;
    if (cell.given) return cell.value;
    const idx = pl[key];
    return idx != null ? CM_POOL[idx] : null;
  };

  const placeNumber = (poolIdx) => {
    if (won) return;
    setPlacements((prev) => {
      const target = selected || blanks.find((k) => prev[k] == null);
      if (!target) return prev;
      const next = {};
      Object.keys(prev).forEach((k) => {
        if (prev[k] !== poolIdx) next[k] = prev[k];
      });
      next[target] = poolIdx;
      return next;
    });
    setSelected(null);
  };

  const clickCell = (key) => {
    if (won) return;
    const cell = CM_NUMBERS[key];
    if (!cell || cell.given) return;
    setPlacements((prev) => {
      if (prev[key] == null) return prev;
      const next = { ...prev };
      delete next[key];
      return next;
    });
    setSelected(key);
  };

  // Auto-check whenever every blank is filled.
  useEffect(() => {
    const allFilled = blanks.every((k) => placements[k] != null);
    if (!allFilled) return;
    const ok = CM_EQUATIONS.every(
      (eq) =>
        applyOp(valAt(eq.a, placements), eq.op, valAt(eq.b, placements)) ===
        valAt(eq.r, placements)
    );
    if (ok) {
      setWon(true);
    } else {
      setShake(true);
      const t = setTimeout(() => setShake(false), 600);
      return () => clearTimeout(t);
    }
  }, [placements, blanks]);

  // Advance after solving.
  useEffect(() => {
    if (!won) return;
    const t = setTimeout(onSolved, 3000);
    return () => clearTimeout(t);
  }, [won, onSolved]);

  const reset = () => {
    setPlacements({});
    setSelected(null);
    setWon(false);
  };

  const usedPool = new Set(Object.values(placements));

  const renderCell = (key) => {
    const num = CM_NUMBERS[key];
    if (num) {
      const v = valAt(key, placements);
      if (num.given) {
        return (
          <div
            key={key}
            className="flex h-16 w-16 items-center justify-center rounded-xl bg-gradient-to-br from-pink-400 to-rose-500 text-2xl font-extrabold text-white shadow-md"
          >
            {num.value}
          </div>
        );
      }
      const isSel = selected === key;
      return (
        <button
          key={key}
          type="button"
          onClick={() => clickCell(key)}
          className={`flex h-16 w-16 items-center justify-center rounded-xl border-2 text-2xl font-extrabold transition-all ${
            isSel
              ? "border-rose-400 bg-rose-50 ring-2 ring-rose-300 !text-rose-600"
              : v != null
              ? "border-pink-300 bg-white !text-pink-600"
              : "cynthia-anim-heartbeat border-dashed border-pink-300 bg-pink-50/70 !text-pink-400"
          }`}
        >
          {v != null ? v : ""}
        </button>
      );
    }
    if (CM_OPS[key]) {
      return (
        <div
          key={key}
          className="flex h-16 w-16 items-center justify-center text-3xl font-bold text-rose-400"
        >
          {CM_OPS[key]}
        </div>
      );
    }
    if (CM_EQUALS.includes(key)) {
      return (
        <div
          key={key}
          className="flex h-16 w-16 items-center justify-center text-3xl font-bold text-rose-400"
        >
          =
        </div>
      );
    }
    return <div key={key} className="h-16 w-16" />;
  };

  const cells = [];
  for (let r = 0; r < CM_SIZE; r++) {
    for (let c = 0; c < CM_SIZE; c++) {
      cells.push(renderCell(`${r}-${c}`));
    }
  }

  return (
    <div className="cynthia-anim-fade-up relative rounded-3xl bg-white/80 p-8 text-center shadow-2xl shadow-pink-300/50 backdrop-blur-md">
      {!won && <BackButton onClick={onBack} />}
      <div className="mb-1 text-5xl">🧮</div>
      <h2 className="mb-1 text-2xl font-extrabold text-pink-600 sm:text-3xl">
        Reken-kruiswoord 💕
      </h2>
      <p className="mb-6 text-pink-700">
        Tik op een leeg vakje en kies dan een getal, zodat élke som klopt (van
        links naar rechts) 🥰
      </p>

      <div
        className={`mx-auto mb-6 grid w-fit gap-1.5 ${
          shake ? "cynthia-anim-shake" : ""
        }`}
        style={{ gridTemplateColumns: `repeat(${CM_SIZE}, 4rem)` }}
      >
        {cells}
      </div>

      {won ? (
        <p className="cynthia-anim-pop mb-2 text-xl font-bold text-rose-500">
          Helemaal goed! Wat ben jij slim 🥰💕 Door naar het volgende spelletje...
        </p>
      ) : (
        <>
          <p className="mb-2 text-sm font-semibold text-pink-600">Kies een getal:</p>
          <div className="mb-6 flex flex-wrap items-center justify-center gap-2">
            {CM_POOL.map((val, idx) => {
              const used = usedPool.has(idx);
              return (
                <button
                  key={idx}
                  type="button"
                  disabled={used}
                  onClick={() => placeNumber(idx)}
                  className={`normal-case flex h-12 w-12 items-center justify-center rounded-xl text-xl font-extrabold shadow-md transition-transform ${
                    used
                      ? "cursor-default bg-pink-100 !text-pink-300 opacity-50"
                      : "bg-gradient-to-br from-pink-500 to-rose-500 !text-white hover:scale-110 hover:!text-white"
                  }`}
                >
                  {val}
                </button>
              );
            })}
          </div>
          <button
            type="button"
            onClick={reset}
            className="normal-case rounded-full bg-white px-6 py-2.5 text-sm font-semibold !text-rose-500 shadow-md shadow-pink-200 transition-transform hover:scale-105 hover:!text-rose-500"
          >
            🔁 Opnieuw
          </button>
        </>
      )}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Step 4 — "Select Fufu" image captcha                              */
/* ------------------------------------------------------------------ */

const FufuStep = ({ onSolved, onBack }) => {
  // Build & shuffle the 9 tiles once, on the client, when this step mounts.
  const [tiles, setTiles] = useState([]);
  const [selected, setSelected] = useState(() => new Set());
  const [won, setWon] = useState(false);
  const [shake, setShake] = useState(false);
  const [tries, setTries] = useState(0);
  const [zoomSrc, setZoomSrc] = useState(null);

  const buildTiles = () =>
    shuffle([
      ...FUFU_IMAGES.map((src) => ({ src, isFufu: true })),
      ...FUFU_DECOYS.map((src) => ({ src, isFufu: false })),
    ]);

  useEffect(() => {
    setTiles(buildTiles());
  }, []);

  const toggle = (i) => {
    if (won) return;
    setSelected((prev) => {
      const next = new Set(prev);
      next.has(i) ? next.delete(i) : next.add(i);
      return next;
    });
  };

  const verify = () => {
    const picked = [...selected];
    const correct =
      picked.length === 3 && picked.every((i) => tiles[i]?.isFufu);
    if (correct) {
      setWon(true);
    } else {
      setShake(true);
      setTries((t) => t + 1);
      setTimeout(() => setShake(false), 600);
      setSelected(new Set());
    }
  };

  const refresh = () => {
    setTiles(buildTiles());
    setSelected(new Set());
  };

  // Advance after solving.
  useEffect(() => {
    if (!won) return;
    const t = setTimeout(onSolved, 2600);
    return () => clearTimeout(t);
  }, [won, onSolved]);

  return (
    <div className="cynthia-anim-fade-up relative rounded-3xl bg-white/80 p-8 text-center shadow-2xl shadow-pink-300/50 backdrop-blur-md">
      {!won && <BackButton onClick={onBack} />}

      {/* Captcha header bar */}
      <div className="mx-auto mb-5 max-w-md overflow-hidden rounded-2xl shadow-md">
        <div className="bg-gradient-to-r from-pink-500 to-rose-500 px-5 py-4 text-left text-white">
          <p className="text-sm uppercase tracking-widest opacity-90">Selecteer alle</p>
          <p className="text-2xl font-extrabold">foto&apos;s van Fufu 🐱</p>
        </div>
      </div>

      <p className="mb-5 text-pink-700">
        Klik op de 3 plaatjes van jouw kindje Fufu 💕
      </p>

      {/* 3x3 image grid */}
      <div
        className={`mx-auto mb-5 grid w-fit grid-cols-3 gap-3 ${
          shake ? "cynthia-anim-shake" : ""
        }`}
      >
        {tiles.map((tile, i) => {
          const isSel = selected.has(i);
          return (
            <div
              key={i}
              role="button"
              tabIndex={0}
              onClick={() => toggle(i)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  toggle(i);
                }
              }}
              className={`group relative h-40 w-40 cursor-pointer overflow-hidden rounded-2xl border-4 shadow-sm transition-all duration-150 hover:scale-[1.03] ${
                isSel ? "border-rose-500" : "border-transparent"
              }`}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={tile.src}
                alt="kat"
                className="h-full w-full object-cover"
              />
              {/* Zoom button — appears on hover */}
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  setZoomSrc(tile.src);
                }}
                aria-label="Vergroot foto"
                className="normal-case absolute bottom-2 left-2 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 text-base !text-rose-500 opacity-0 shadow-md transition-opacity duration-150 hover:scale-110 hover:!text-rose-500 group-hover:opacity-100"
              >
                🔍
              </button>
              {isSel && (
                <span className="absolute right-2 top-2 flex h-8 w-8 items-center justify-center rounded-full bg-rose-500 text-base font-bold text-white shadow">
                  ✓
                </span>
              )}
              {isSel && <span className="pointer-events-none absolute inset-0 bg-rose-500/20" />}
            </div>
          );
        })}
      </div>

      {/* Zoom lightbox overlay */}
      {zoomSrc && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-6 backdrop-blur-sm"
          onClick={() => setZoomSrc(null)}
        >
          <div className="relative" onClick={(e) => e.stopPropagation()}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={zoomSrc}
              alt="kat groot"
              className="max-h-[80vh] max-w-[80vw] rounded-3xl border-4 border-white object-contain shadow-2xl"
            />
            <button
              type="button"
              onClick={() => setZoomSrc(null)}
              aria-label="Sluiten"
              className="normal-case absolute -right-3 -top-3 flex h-10 w-10 items-center justify-center rounded-full bg-white text-lg font-bold !text-rose-500 shadow-lg transition-transform hover:scale-110 hover:!text-rose-500"
            >
              ✕
            </button>
          </div>
        </div>
      )}

      {won ? (
        <p className="cynthia-anim-pop mb-2 text-xl font-bold text-rose-500">
          Dat is Fufu! 🐱💕 Geverifieerd — door naar de laatste stap...
        </p>
      ) : (
        <>
          {tries > 0 && (
            <p className="mb-3 text-sm font-semibold text-pink-600">
              Hmm, dat waren niet (alleen) foto&apos;s van Fufu! Probeer opnieuw 💗
            </p>
          )}
          <div className="flex items-center justify-center gap-4">
            <button
              type="button"
              onClick={refresh}
              className="normal-case rounded-full bg-white px-5 py-2.5 text-sm font-semibold !text-rose-500 shadow-md shadow-pink-200 transition-transform hover:scale-105 hover:!text-rose-500"
            >
              🔁 Husselen
            </button>
            <button
              type="button"
              onClick={verify}
              disabled={selected.size === 0}
              className={`normal-case rounded-full px-8 py-2.5 text-sm font-bold !text-white shadow-md transition-transform hover:!text-white ${
                selected.size === 0
                  ? "cursor-not-allowed bg-pink-300"
                  : "bg-gradient-to-r from-pink-500 to-rose-500 shadow-pink-300 hover:scale-105"
              }`}
            >
              Verifiëren
            </button>
          </div>
        </>
      )}
    </div>
  );
};

/* ------------------------------------------------------------------ */
/*  Step 5 — Date & preferences picker                                */
/* ------------------------------------------------------------------ */

const PickerStep = ({ onDone, onBack }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [food, setFood] = useState("");
  const [foodAlex, setFoodAlex] = useState(false);
  const [activity, setActivity] = useState("");
  const [activityAlex, setActivityAlex] = useState(false);
  const [status, setStatus] = useState("idle"); // idle | sending | error

  const canSubmit =
    selectedDate &&
    (foodAlex || food.trim().length > 0) &&
    (activityAlex || activity.trim().length > 0);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!canSubmit || status === "sending") return;

    const dateLabel = DATES.find((d) => d.id === selectedDate)?.label || selectedDate;
    const foodVal = foodAlex ? "Laat Alex kiezen 💘" : food.trim();
    const activityVal = activityAlex ? "Laat Alex kiezen 💘" : activity.trim();

    const message =
      `Cynthia heeft JA gezegd op de date! 💕\n\n` +
      `📅 Gekozen datum: ${dateLabel}\n` +
      `🍽️ Eten: ${foodVal}\n` +
      `🎉 Activiteit: ${activityVal}\n`;

    setStatus("sending");
    emailjs
      .send(
        process.env.NEXT_PUBLIC_SERVICE_ID?.trim(),
        process.env.NEXT_PUBLIC_TEMPLATE_ID?.trim(),
        {
          name: "Cynthia",
          email: "cynthia@date.nl",
          subject: "Cynthia zei JA op de date! 💕",
          message,
        },
        process.env.NEXT_PUBLIC_PUBLIC_KEY?.trim()
      )
      .then(
        () => onDone(),
        (err) => {
          console.log(err);
          setStatus("error");
        }
      );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="cynthia-anim-fade-up relative rounded-3xl bg-white/80 p-8 text-center shadow-2xl shadow-pink-300/50 backdrop-blur-md"
    >
      {status !== "sending" && <BackButton onClick={onBack} />}

      <div className="mb-1 text-5xl">📅</div>
      <h2 className="mb-1 text-2xl font-extrabold text-pink-600 sm:text-3xl">
        Yes! Wanneer kan je?
      </h2>
      <p className="mb-6 text-pink-700">Kies een dag die jou het beste uitkomt 💖</p>

      {/* Dates */}
      <div className="mb-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
        {DATES.map((d) => {
          const active = selectedDate === d.id;
          return (
            <button
              type="button"
              key={d.id}
              onClick={() => setSelectedDate(d.id)}
              className={`normal-case rounded-2xl px-3 py-4 text-sm font-bold shadow-md transition-all duration-200 hover:scale-105 ${
                active
                  ? "bg-gradient-to-br from-pink-500 to-rose-500 !text-white shadow-pink-400/60"
                  : "bg-white !text-pink-600 hover:!text-pink-600"
              }`}
            >
              {active ? "💗 " : ""}
              {d.label}
            </button>
          );
        })}
      </div>

      {/* Food */}
      <div className="mb-5 text-left">
        <label className="mb-1 block font-semibold text-pink-700">
          🍽️ Waar heb je trek in?
        </label>
        <input
          type="text"
          value={foodAlex ? "Laat Alex kiezen 💘" : food}
          onChange={(e) => setFood(e.target.value)}
          disabled={foodAlex}
          placeholder="bv. sushi, Italiaans, pannenkoeken..."
          className="w-full rounded-xl border-2 border-pink-200 bg-white/90 p-3 text-pink-800 outline-none transition focus:border-pink-400 disabled:opacity-70"
        />
        <label className="mt-2 flex cursor-pointer items-center gap-2 text-sm text-pink-600">
          <input
            type="checkbox"
            checked={foodAlex}
            onChange={(e) => setFoodAlex(e.target.checked)}
            className="h-4 w-4 accent-pink-500"
          />
          Laat Alex kiezen
        </label>
      </div>

      {/* Activity */}
      <div className="mb-7 text-left">
        <label className="mb-1 block font-semibold text-pink-700">
          🎉 Wat wil je doen?
        </label>
        <input
          type="text"
          value={activityAlex ? "Laat Alex kiezen 💘" : activity}
          onChange={(e) => setActivity(e.target.value)}
          disabled={activityAlex}
          placeholder="bv. film, wandelen, museum, spelletjes..."
          className="w-full rounded-xl border-2 border-pink-200 bg-white/90 p-3 text-pink-800 outline-none transition focus:border-pink-400 disabled:opacity-70"
        />
        <label className="mt-2 flex cursor-pointer items-center gap-2 text-sm text-pink-600">
          <input
            type="checkbox"
            checked={activityAlex}
            onChange={(e) => setActivityAlex(e.target.checked)}
            className="h-4 w-4 accent-pink-500"
          />
          Laat Alex kiezen
        </label>
      </div>

      {status === "error" && (
        <p className="mb-4 text-sm font-semibold text-rose-500">
          Oeps, er ging iets mis met versturen. Probeer het nog een keer 💗
        </p>
      )}

      <button
        type="submit"
        disabled={!canSubmit || status === "sending"}
        className={`normal-case rounded-full px-12 py-4 text-lg font-bold !text-white shadow-lg transition-all duration-200 hover:!text-white ${
          canSubmit && status !== "sending"
            ? "cynthia-anim-heartbeat bg-gradient-to-r from-pink-500 to-rose-500 shadow-pink-400/50 hover:scale-105"
            : "cursor-not-allowed bg-pink-300 shadow-none"
        }`}
      >
        {status === "sending" ? "Versturen... 💌" : "Stuur naar Alex 💌"}
      </button>
    </form>
  );
};

/* ------------------------------------------------------------------ */
/*  Step 4 — Done / celebration                                       */
/* ------------------------------------------------------------------ */

const DoneStep = ({ mounted }) => {
  const confetti = useMemo(() => {
    if (!mounted) return [];
    return Array.from({ length: 70 }).map((_, i) => ({
      left: `${Math.random() * 100}%`,
      bg: CONFETTI_COLORS[i % CONFETTI_COLORS.length],
      delay: `${Math.random() * 2.5}s`,
      duration: `${2.5 + Math.random() * 2.5}s`,
    }));
  }, [mounted]);

  return (
    <>
      {/* Confetti */}
      {confetti.map((c, i) => (
        <span
          key={i}
          className="cynthia-confetti-piece"
          style={{
            left: c.left,
            backgroundColor: c.bg,
            animationDelay: c.delay,
            animationDuration: c.duration,
          }}
        />
      ))}

      <div className="cynthia-anim-pop relative z-10 rounded-3xl bg-white/80 p-12 text-center shadow-2xl shadow-pink-300/50 backdrop-blur-md">
        <div className="cynthia-anim-heartbeat mb-6 text-7xl">💕</div>
        <h1 className="mb-4 text-4xl font-extrabold text-pink-600 sm:text-5xl">
          It&apos;s a date! 🥳
        </h1>
        <p className="mx-auto mb-2 max-w-xl text-xl text-pink-800">
          Dankjewel Cynthia, je hebt me de gelukkigste gemaakt! 🥰
        </p>
        <p className="text-lg text-pink-700">
          Alex heeft je antwoord ontvangen en kan niet wachten. Tot snel! 💌
        </p>
        <div className="mt-8 text-3xl">💖 💍 💖</div>
      </div>
    </>
  );
};
