"use client";

import React, { useState, useEffect } from "react";
import { Mic, MicOff, Volume2, Sparkles, Activity, Shield, Terminal, Zap, Radio } from "lucide-react";

export default function Home() {
  const [isListening, setIsListening] = useState(false);
  const [status, setStatus] = useState<"idle" | "listening" | "processing" | "speaking">("idle");
  const [transcript, setTranscript] = useState("");
  const [response, setResponse] = useState("Schnee... welcome back. All systems operational.");
  const [logs, setLogs] = useState<string[]>([
    "[System] Tethys Core Initialized",
    "[Network] WebSocket Bridge Ready on port 20128",
    "[Voice] MiMo TTS / STT pipeline connected",
  ]);

  const toggleListening = () => {
    if (!isListening) {
      setIsListening(true);
      setStatus("listening");
      setTranscript("Listening for Schnee's instruction...");
      
      // Simulation cycle
      setTimeout(() => {
        setStatus("processing");
        setLogs((prev) => [...prev, "[STT] Processing audio buffer..."]);
      }, 3000);

      setTimeout(() => {
        setStatus("speaking");
        setTranscript("Shorekeeper, check system health and status.");
        setResponse("Checking system status... All 9router nodes and local services are running optimal.");
        setLogs((prev) => [...prev, "[Agent] Executing tool: system_health()", "[TTS] Generating voice output (128kbps CBR)"]);
      }, 5000);

      setTimeout(() => {
        setStatus("idle");
        setIsListening(false);
      }, 8000);
    } else {
      setIsListening(false);
      setStatus("idle");
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-black">
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[140px]" />
        <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[120px]" />
      </div>

      {/* Header */}
      <header className="border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-md px-6 py-4 flex items-center justify-between z-10">
        <div className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <h1 className="font-bold tracking-wider text-base uppercase bg-gradient-to-r from-white via-slate-200 to-cyan-400 bg-clip-text text-transparent">
              SHOREKEEPER <span className="text-cyan-400 text-xs font-mono ml-1 px-1.5 py-0.5 rounded border border-cyan-500/30 bg-cyan-500/10">JARVIS v1.0</span>
            </h1>
            <p className="text-xs text-slate-400 font-mono">Tethys Realtime Voice Interface</p>
          </div>
        </div>

        <div className="flex items-center gap-4 text-xs font-mono text-slate-400">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-800 bg-slate-900/50">
            <Radio className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
            <span>Bridge: Active</span>
          </div>
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-800 bg-slate-900/50">
            <Shield className="w-3.5 h-3.5 text-cyan-400" />
            <span>User: Schnee</span>
          </div>
        </div>
      </header>

      {/* Main Content Area */}
      <div className="flex-1 max-w-6xl w-full mx-auto p-6 grid grid-cols-1 md:grid-cols-12 gap-6 z-10">
        {/* Left Panel - Visualizer Orb */}
        <div className="md:col-span-7 flex flex-col items-center justify-center border border-slate-800/80 rounded-2xl bg-slate-900/40 backdrop-blur-md p-8 relative overflow-hidden group">
          <div className="absolute top-4 left-4 flex items-center gap-2 text-xs font-mono text-slate-400">
            <Activity className="w-4 h-4 text-cyan-400" />
            <span>STELLAREALM VOICE CORE</span>
          </div>

          {/* Glowing Orb Animation */}
          <div className="relative my-12 flex items-center justify-center">
            {/* Outer Pulsing Rings */}
            <div className={`absolute w-72 h-72 rounded-full border border-cyan-500/20 transition-all duration-700 ${status === "listening" ? "scale-125 border-cyan-400/50 animate-ping" : status === "speaking" ? "scale-110 border-blue-400/40 animate-pulse" : "scale-100"}`} />
            <div className={`absolute w-60 h-60 rounded-full border border-blue-500/30 transition-all duration-500 ${status === "processing" ? "rotate-180 scale-105 border-dashed" : ""}`} />
            
            {/* Main Interactive Button Orb */}
            <button
              onClick={toggleListening}
              className={`w-44 h-44 rounded-full flex flex-col items-center justify-center transition-all duration-500 shadow-2xl relative z-10 group/btn ${
                status === "listening"
                  ? "bg-gradient-to-br from-cyan-500 to-blue-600 shadow-cyan-500/50 scale-105"
                  : status === "processing"
                  ? "bg-gradient-to-br from-indigo-600 to-purple-600 shadow-purple-500/50 animate-pulse"
                  : status === "speaking"
                  ? "bg-gradient-to-br from-cyan-400 via-blue-600 to-indigo-600 shadow-blue-500/50"
                  : "bg-slate-900 border-2 border-slate-700/80 hover:border-cyan-500/80 hover:shadow-cyan-500/20"
              }`}
            >
              {status === "listening" ? (
                <Mic className="w-12 h-12 text-white animate-bounce" />
              ) : status === "speaking" ? (
                <Volume2 className="w-12 h-12 text-white animate-pulse" />
              ) : (
                <MicOff className="w-12 h-12 text-slate-400 group-hover/btn:text-cyan-400 transition-colors" />
              )}
              <span className="text-xs font-mono mt-2 font-medium tracking-wider text-slate-200">
                {status === "idle" ? "TAP TO TALK" : status.toUpperCase()}
              </span>
            </button>
          </div>

          {/* Subtitle Display */}
          <div className="w-full text-center space-y-2 max-w-lg">
            <p className="text-xs font-mono text-slate-400 uppercase tracking-widest">Live Transcript</p>
            <p className="text-sm font-medium text-slate-300 italic min-h-[40px] flex items-center justify-center">
              "{transcript || "Press the orb or speak to initiate realtime dialogue..."}"
            </p>
          </div>
        </div>

        {/* Right Panel - Terminal Logs & AI Response */}
        <div className="md:col-span-5 flex flex-col gap-6">
          {/* Response Box */}
          <div className="border border-slate-800/80 rounded-2xl bg-slate-900/40 backdrop-blur-md p-6 flex flex-col gap-3">
            <div className="flex items-center justify-between text-xs font-mono text-slate-400">
              <span className="flex items-center gap-1.5 text-cyan-400">
                <Zap className="w-4 h-4" /> SHOREKEEPER RESPONSE
              </span>
              <span className="text-slate-400">Spectro Mode</span>
            </div>
            <p className="text-sm text-slate-200 leading-relaxed font-sans bg-slate-950/40 p-4 rounded-xl border border-slate-800/60">
              {response}
            </p>
          </div>

          {/* Terminal Console */}
          <div className="flex-1 border border-slate-800/80 rounded-2xl bg-slate-950/80 backdrop-blur-md p-5 flex flex-col font-mono text-xs overflow-hidden">
            <div className="flex items-center gap-2 pb-3 border-b border-slate-800 text-slate-400 mb-3">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>Realtime Execution Log</span>
            </div>
            <div className="flex-1 overflow-y-auto space-y-2 text-slate-300 pr-2">
              {logs.map((log, index) => (
                <div key={index} className="flex gap-2">
                  <span className="text-slate-400 select-none">&gt;</span>
                  <span className={log.includes("Executing") ? "text-cyan-400" : log.includes("Voice") ? "text-emerald-400" : "text-slate-300"}>
                    {log}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
