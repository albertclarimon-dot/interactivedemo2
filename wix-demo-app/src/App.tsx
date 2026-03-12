/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  CheckCircle2, 
  ShieldCheck, 
  Clock, 
  BarChart3, 
  Smartphone, 
  X, 
  ChevronDown,
  Wrench,
  Inbox,
  Activity,
  Search,
  Building2,
  MapPin,
  User,
  Camera,
  AlertTriangle,
  Bot,
  Send,
  Image as ImageIcon,
  Loader2,
  RotateCcw
} from 'lucide-react';

// --- Components ---

const Navbar = ({ onOpenModal }: { onOpenModal: () => void }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-zinc-50/80 backdrop-blur-md border-b border-zinc-100 py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-indigo-600 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5 text-zinc-900" />
          </div>
          <span className="text-xl font-semibold tracking-tight">Altavia <span className="text-zinc-500 font-normal">Umbral</span></span>
        </div>
        <button 
          onClick={onOpenModal}
          className="bg-zinc-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2"
        >
          Solicitar demo
        </button>
      </div>
    </header>
  );
};

const Hero = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-indigo-600/20 rounded-full blur-[120px] opacity-50 pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-start"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-50 border border-zinc-200 text-xs font-medium text-zinc-600 mb-6">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
            Plataforma operativa B2B
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight leading-[1.1] mb-6">
            Menos llamadas.<br />
            <span className="text-zinc-500">Más control.</span><br />
            Más comunidades.
          </h1>
          <p className="text-lg text-zinc-500 mb-8 max-w-xl leading-relaxed">
            La plataforma operativa que ayuda a instaladores y mantenedores a gestionar incidencias, reposiciones y accesos desde un solo lugar. Reduce carga administrativa y aporta trazabilidad real.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button 
              onClick={onOpenModal}
              className="bg-indigo-600 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2"
            >
              Solicita una demo <ArrowRight className="w-4 h-4" />
            </button>
            <button 
              onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
              className="bg-zinc-50 text-zinc-900 border border-zinc-200 px-8 py-4 rounded-full text-base font-medium hover:bg-zinc-100 transition-colors flex items-center justify-center"
            >
              Descubre cómo funciona
            </button>
          </div>
        </motion.div>

        {/* High-Fidelity UI Mockup */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative w-full h-[450px] md:h-[550px] lg:h-[600px] xl:h-[650px] rounded-2xl border border-zinc-200 bg-white overflow-hidden shadow-2xl shadow-indigo-500/20 flex flex-col text-sm"
        >
          {/* Mockup Header */}
          <div className="h-12 border-b border-zinc-200 flex items-center px-4 gap-4 bg-zinc-50 shrink-0">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50" />
              <div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50" />
            </div>
            <div className="flex-1 flex justify-center hidden sm:flex">
              <div className="w-64 h-7 bg-zinc-50 border border-zinc-200 rounded-md flex items-center px-3 gap-2 text-zinc-400">
                <Search className="w-3 h-3" /> <span className="text-xs">Buscar incidencia...</span>
              </div>
            </div>
          </div>
          {/* Mockup Body */}
          <div className="flex-1 flex overflow-hidden">
            {/* Sidebar */}
            <div className="w-14 lg:w-40 border-r border-zinc-200 bg-white p-2 lg:p-3 flex flex-col gap-1 hidden md:flex items-center lg:items-stretch shrink-0">
              <div className="p-2 lg:px-3 lg:py-2 bg-indigo-500/10 text-indigo-600 rounded-lg flex items-center justify-center lg:justify-start gap-2 font-medium text-xs">
                <Inbox className="w-4 h-4 shrink-0" /> <span className="hidden lg:inline">Bandeja</span>
              </div>
              <div className="p-2 lg:px-3 lg:py-2 text-zinc-500 hover:text-zinc-800 rounded-lg flex items-center justify-center lg:justify-start gap-2 text-xs">
                <Building2 className="w-4 h-4 shrink-0" /> <span className="hidden lg:inline">Edificios</span>
              </div>
              <div className="p-2 lg:px-3 lg:py-2 text-zinc-500 hover:text-zinc-800 rounded-lg flex items-center justify-center lg:justify-start gap-2 text-xs">
                <Wrench className="w-4 h-4 shrink-0" /> <span className="hidden lg:inline">Equipo</span>
              </div>
            </div>
            {/* List */}
            <div className="w-48 lg:w-56 border-r border-zinc-200 bg-white flex flex-col hidden sm:flex shrink-0">
              <div className="p-3 border-b border-zinc-200 font-medium text-zinc-800 text-xs shrink-0">Incidencias (3)</div>
              <div className="overflow-y-auto flex-1">
                <div className="p-3 border-b border-zinc-100 bg-zinc-50 cursor-pointer">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-[10px] font-medium text-red-600 bg-red-100 px-1.5 py-0.5 rounded">Urgente</span>
                    <span className="text-[10px] text-zinc-400">10:42</span>
                  </div>
                  <div className="font-medium text-zinc-800 mb-0.5 text-xs truncate">Fallo motor puerta</div>
                  <div className="text-[10px] text-zinc-500 truncate">Comunidad Los Olivos</div>
                </div>
                <div className="p-3 border-b border-zinc-100 cursor-pointer opacity-60">
                  <div className="flex justify-between items-start mb-1">
                    <span className="text-[10px] font-medium text-yellow-600 bg-yellow-100 px-1.5 py-0.5 rounded">Revisión</span>
                    <span className="text-[10px] text-zinc-400">Ayer</span>
                  </div>
                  <div className="font-medium text-zinc-800 mb-0.5 text-xs truncate">Mando no responde</div>
                  <div className="text-[10px] text-zinc-500 truncate">Edificio Norte 24</div>
                </div>
              </div>
            </div>
            {/* Detail */}
            <div className="flex-1 min-w-0 bg-zinc-50 p-4 md:p-6 flex flex-col gap-4 overflow-y-auto">
              <div>
                <h2 className="text-base md:text-lg font-semibold text-zinc-900 mb-1">Fallo motor puerta principal</h2>
                <div className="text-xs text-zinc-500 flex items-center gap-2">
                  <MapPin className="w-3 h-3 shrink-0" /> <span className="truncate">Comunidad Los Olivos, C/ Mayor 12</span>
                </div>
              </div>
              <div className="grid grid-cols-1 gap-3">
                <div className="bg-white border border-zinc-200 rounded-lg p-3 shadow-sm">
                  <div className="text-[10px] text-zinc-400 mb-1 uppercase tracking-wider font-medium">Diagnóstico AI</div>
                  <div className="text-xs text-zinc-600 leading-relaxed">Alta probabilidad de fallo en condensador. Último mantenimiento hace 8 meses.</div>
                </div>
                <div className="bg-white border border-zinc-200 rounded-lg p-3 shadow-sm">
                  <div className="text-[10px] text-zinc-400 mb-1 uppercase tracking-wider font-medium">Estado</div>
                  <div className="flex items-center gap-2 text-xs text-zinc-600">
                    <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" /> Pendiente de visita
                  </div>
                </div>
              </div>
              <div className="flex-1 border border-zinc-200 rounded-lg bg-white p-4 flex flex-col gap-4 shadow-sm mt-2">
                 <div className="text-[10px] font-medium text-zinc-400 uppercase tracking-wider border-b border-zinc-200 pb-2">Trazabilidad</div>
                 <div className="flex gap-3 relative">
                   <div className="absolute left-[11px] top-6 bottom-[-24px] w-[2px] bg-zinc-100" />
                   <div className="w-6 h-6 rounded-full bg-indigo-50 flex items-center justify-center shrink-0 relative z-10">
                     <User className="w-3 h-3 text-indigo-500" />
                   </div>
                   <div>
                     <div className="text-xs font-medium text-zinc-800">Aviso reportado por Administrador</div>
                     <div className="text-[10px] text-zinc-400">Hoy, 10:42</div>
                   </div>
                 </div>
                 <div className="flex gap-3 relative">
                   <div className="w-6 h-6 rounded-full bg-emerald-50 flex items-center justify-center shrink-0 relative z-10">
                     <CheckCircle2 className="w-3 h-3 text-emerald-500" />
                   </div>
                   <div>
                     <div className="text-xs font-medium text-zinc-800">Técnico asignado: Carlos M.</div>
                     <div className="text-[10px] text-zinc-400">Hoy, 11:05</div>
                   </div>
                 </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const InteractiveDemo = () => {
  const [step, setStep] = useState(0);
  const [isTyping, setIsTyping] = useState(false);
  const [activeTab, setActiveTab] = useState<'inbox' | 'buildings' | 'team'>('inbox');
  const [scenario, setScenario] = useState<'incidencia' | 'mando' | 'piscina' | 'comunidad' | 'duda' | 'alta' | null>(null);
  const [completedScenarios, setCompletedScenarios] = useState<('incidencia' | 'mando' | 'piscina' | 'comunidad' | 'duda' | 'alta')[]>([]);
  const [altaPath, setAltaPath] = useState<string[]>([]);

  const handleScenarioSelect = (type: 'incidencia' | 'mando' | 'piscina' | 'comunidad' | 'duda' | 'alta') => {
    setScenario(type);
    setAltaPath([]);
    setStep(1);
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 1500);
  };

  const handleAltaOption = (option: string, nextStep: number) => {
    setAltaPath(prev => [...prev, option]);
    setStep(nextStep);
    setIsTyping(true);
    setTimeout(() => setIsTyping(false), 1500);
  };

  const handlePhotoUpload = () => {
    setStep(2);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setStep(3);
      if (scenario && !completedScenarios.includes(scenario)) {
        setCompletedScenarios(prev => [...prev, scenario]);
      }
    }, 2000);
  };

  const handleConfirmOrder = () => {
    setStep(2);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setStep(3);
      if (!completedScenarios.includes('mando')) {
        setCompletedScenarios(prev => [...prev, 'mando']);
      }
    }, 2000);
  };

  const handleDudaResponse = () => {
    setStep(2);
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
      setStep(3);
      // We don't add to completedScenarios because it shouldn't show in the dashboard
    }, 2000);
  };

  const handleAdminAction = () => {
    if (scenario === 'alta') {
      setStep(11);
    } else {
      setStep(4);
    }
    setIsTyping(true);
    setTimeout(() => {
      setIsTyping(false);
    }, 2000);
  };

  const resetDemo = () => {
    setStep(0);
    setScenario(null);
    setAltaPath([]);
    setIsTyping(false);
    setActiveTab('inbox');
    // We don't reset completedScenarios so they accumulate
  };

  const fullReset = () => {
    setStep(0);
    setScenario(null);
    setAltaPath([]);
    setIsTyping(false);
    setActiveTab('inbox');
    setCompletedScenarios([]);
  };

  const getDiagColor = (scen: string | null) => {
    if (scen === 'comunidad') return { bg: 'bg-red-50', border: 'border-red-100', text: 'text-red-600', textDark: 'text-red-900', blur: 'bg-red-200' };
    if (scen === 'piscina') return { bg: 'bg-orange-50', border: 'border-orange-100', text: 'text-orange-600', textDark: 'text-orange-900', blur: 'bg-orange-200' };
    return { bg: 'bg-indigo-50', border: 'border-indigo-100', text: 'text-indigo-600', textDark: 'text-indigo-900', blur: 'bg-indigo-200' };
  };
  const diagColor = getDiagColor(scenario);

  return (
    <section className="py-24 bg-zinc-50 relative overflow-hidden border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Pruébalo tú mismo</h2>
          <p className="text-zinc-500 text-lg">Interactúa con el asistente como lo haría un vecino y mira cómo la incidencia llega estructurada al panel del instalador en tiempo real.</p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 items-center">
          {/* Mobile Chatbot View */}
          <div className="lg:col-span-4 flex justify-center">
            <div className="w-[300px] h-[600px] bg-zinc-900 border-[8px] border-zinc-800 rounded-[2.5rem] relative overflow-hidden shadow-2xl flex flex-col">
              {/* Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-zinc-100 rounded-b-xl z-20" />
              
              {/* Chat Header */}
              <div className="bg-white pt-10 pb-4 px-4 border-b border-zinc-200 flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-full bg-indigo-600 flex items-center justify-center">
                  <Bot className="w-5 h-5 text-zinc-900" />
                </div>
                <div>
                  <div className="text-sm font-medium text-zinc-900">Asistente Umbral</div>
                  <div className="text-[10px] text-emerald-400 flex items-center gap-1">
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" /> En línea
                  </div>
                </div>
              </div>

              {/* Chat Body */}
              <div className="flex-1 p-4 overflow-y-auto flex flex-col gap-4 bg-white">
                <div className="flex gap-2">
                  <div className="w-6 h-6 rounded-full bg-indigo-600 flex-shrink-0 flex items-center justify-center mt-1">
                    <Bot className="w-3 h-3 text-zinc-900" />
                  </div>
                  <div className="bg-zinc-100 rounded-2xl rounded-tl-none p-3 text-xs text-zinc-800 max-w-[85%]">
                    Hola, soy el asistente de tu comunidad. ¿Qué problema tienes con el acceso?
                  </div>
                </div>

                {step === 0 && !isTyping && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-2 pl-8">
                    <button onClick={() => handleScenarioSelect('comunidad')} className="bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 text-xs py-2 px-4 rounded-full text-left hover:bg-indigo-600/30 transition-colors">
                      Se ha roto la puerta de la comunidad
                    </button>
                    <button onClick={() => handleScenarioSelect('piscina')} className="bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 text-xs py-2 px-4 rounded-full text-left hover:bg-indigo-600/30 transition-colors">
                      La puerta de la piscina no abre
                    </button>
                    <button onClick={() => handleScenarioSelect('incidencia')} className="bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 text-xs py-2 px-4 rounded-full text-left hover:bg-indigo-600/30 transition-colors">
                      La puerta del garaje no abre
                    </button>
                    <button onClick={() => handleScenarioSelect('mando')} className="bg-zinc-50 border border-zinc-200 text-zinc-600 text-xs py-2 px-4 rounded-full text-left hover:bg-zinc-100 transition-colors">
                      Quiero comprar un mando nuevo
                    </button>
                    <button onClick={() => handleScenarioSelect('duda')} className="bg-zinc-50 border border-zinc-200 text-zinc-600 text-xs py-2 px-4 rounded-full text-left hover:bg-zinc-100 transition-colors">
                      No sé cómo usar el nuevo mando
                    </button>
                    <button onClick={() => handleScenarioSelect('alta')} className="bg-zinc-50 border border-zinc-200 text-zinc-600 text-xs py-2 px-4 rounded-full text-left hover:bg-zinc-100 transition-colors">
                      Cómo puedo dar de alta un nuevo usuario
                    </button>
                  </motion.div>
                )}

                {step >= 1 && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="self-end bg-indigo-600 rounded-2xl rounded-tr-none p-3 text-xs text-zinc-900 max-w-[85%]">
                    {scenario === 'incidencia' ? 'La puerta del garaje no abre' : 
                     scenario === 'piscina' ? 'La puerta de la piscina no abre' :
                     scenario === 'comunidad' ? 'Se ha roto la puerta de la comunidad' :
                     scenario === 'duda' ? 'No sé cómo usar el nuevo mando' :
                     scenario === 'alta' ? 'Cómo puedo dar de alta un nuevo usuario' :
                     'Quiero comprar un mando nuevo'}
                  </motion.div>
                )}

                {step >= 1 && (
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-indigo-600 flex-shrink-0 flex items-center justify-center mt-1">
                      <Bot className="w-3 h-3 text-zinc-900" />
                    </div>
                    <div className="bg-zinc-100 rounded-2xl rounded-tl-none p-3 text-xs text-zinc-800 max-w-[85%] whitespace-pre-wrap">
                      {isTyping && step === 1 ? (
                        <Loader2 className="w-4 h-4 animate-spin text-zinc-500" />
                      ) : (scenario === 'incidencia' || scenario === 'piscina' || scenario === 'comunidad') ? (
                        "Entendido. Para ayudar al técnico, ¿puedes adjuntar una foto de la puerta o el motor?"
                      ) : scenario === 'duda' ? (
                        "Claro, te ayudo. ¿Qué modelo de mando tienes? Puedes decirme la marca o el modelo."
                      ) : scenario === 'alta' ? (
                        "¡Hola! Me pongo con ello. Para darte la instrucción exacta, ¿el acceso es para ti o para otra persona?"
                      ) : (
                        "Perfecto. Veo que perteneces a la Comunidad Los Olivos. El coste del mando es de 35€. ¿Confirmas el pedido?"
                      )}
                    </div>
                  </div>
                )}

                {step === 1 && !isTyping && scenario === 'alta' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-2 pl-8">
                    <button onClick={() => handleAltaOption('Para mí', 99)} className="bg-zinc-50 border border-zinc-200 text-zinc-600 text-xs py-2 px-4 rounded-full text-left hover:bg-zinc-100 transition-colors">
                      Para mí
                    </button>
                    <button onClick={() => handleAltaOption('Para un tercero (invitado/empleado)', 2)} className="bg-zinc-50 border border-zinc-200 text-zinc-600 text-xs py-2 px-4 rounded-full text-left hover:bg-zinc-100 transition-colors">
                      Para un tercero (invitado/empleado)
                    </button>
                  </motion.div>
                )}

                {step >= 2 && scenario === 'alta' && altaPath[0] === 'Para un tercero (invitado/empleado)' && (
                  <>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="self-end bg-indigo-600 rounded-2xl rounded-tr-none p-3 text-xs text-zinc-900 max-w-[85%]">
                      Para un tercero (invitado/empleado)
                    </motion.div>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full bg-indigo-600 flex-shrink-0 flex items-center justify-center mt-1">
                        <Bot className="w-3 h-3 text-zinc-900" />
                      </div>
                      <div className="bg-zinc-100 rounded-2xl rounded-tl-none p-3 text-xs text-zinc-800 max-w-[85%] whitespace-pre-wrap">
                        {isTyping && step === 2 ? <Loader2 className="w-4 h-4 animate-spin text-zinc-500" /> : "Vale, configuraremos un acceso externo. ¿Esa persona vendrá de forma puntual (un par de horas/días) o será alguien que use la entrada de forma habitual?"}
                      </div>
                    </div>
                  </>
                )}

                {step === 2 && !isTyping && scenario === 'alta' && altaPath[0] === 'Para un tercero (invitado/empleado)' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-2 pl-8">
                    <button onClick={() => handleAltaOption('Es algo puntual (Temporal)', 3)} className="bg-zinc-50 border border-zinc-200 text-zinc-600 text-xs py-2 px-4 rounded-full text-left hover:bg-zinc-100 transition-colors">
                      Es algo puntual (Temporal)
                    </button>
                    <button onClick={() => handleAltaOption('Vendrá siempre (Recurrente)', 4)} className="bg-zinc-50 border border-zinc-200 text-zinc-600 text-xs py-2 px-4 rounded-full text-left hover:bg-zinc-100 transition-colors">
                      Vendrá siempre (Recurrente)
                    </button>
                  </motion.div>
                )}

                {step >= 3 && scenario === 'alta' && altaPath[1] === 'Es algo puntual (Temporal)' && (
                  <>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="self-end bg-indigo-600 rounded-2xl rounded-tr-none p-3 text-xs text-zinc-900 max-w-[85%]">
                      Es algo puntual (Temporal)
                    </motion.div>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full bg-indigo-600 flex-shrink-0 flex items-center justify-center mt-1">
                        <Bot className="w-3 h-3 text-zinc-900" />
                      </div>
                      <div className="bg-zinc-100 rounded-2xl rounded-tl-none p-3 text-xs text-zinc-800 max-w-[85%] whitespace-pre-wrap">
                        {isTyping && step === 3 ? <Loader2 className="w-4 h-4 animate-spin text-zinc-500" /> : "Entendido, acceso efímero. ¿Necesitas que entre de forma autónoma (con su móvil) o estarás tú allí para abrirle?"}
                      </div>
                    </div>
                  </>
                )}

                {step === 3 && !isTyping && scenario === 'alta' && altaPath[1] === 'Es algo puntual (Temporal)' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-2 pl-8">
                    <button onClick={() => handleAltaOption('Usará su móvil', 99)} className="bg-zinc-50 border border-zinc-200 text-zinc-600 text-xs py-2 px-4 rounded-full text-left hover:bg-zinc-100 transition-colors">
                      Usará su móvil
                    </button>
                    <button onClick={() => handleAltaOption('Estaré yo allí', 99)} className="bg-zinc-50 border border-zinc-200 text-zinc-600 text-xs py-2 px-4 rounded-full text-left hover:bg-zinc-100 transition-colors">
                      Estaré yo allí
                    </button>
                  </motion.div>
                )}

                {step >= 4 && scenario === 'alta' && altaPath[1] === 'Vendrá siempre (Recurrente)' && (
                  <>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="self-end bg-indigo-600 rounded-2xl rounded-tr-none p-3 text-xs text-zinc-900 max-w-[85%]">
                      Vendrá siempre (Recurrente)
                    </motion.div>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full bg-indigo-600 flex-shrink-0 flex items-center justify-center mt-1">
                        <Bot className="w-3 h-3 text-zinc-900" />
                      </div>
                      <div className="bg-zinc-100 rounded-2xl rounded-tl-none p-3 text-xs text-zinc-800 max-w-[85%] whitespace-pre-wrap">
                        {isTyping && step === 4 ? <Loader2 className="w-4 h-4 animate-spin text-zinc-500" /> : "Si es recurrente, lo ideal es que tenga su propio método de entrada. ¿Qué tipo de perfil es?"}
                      </div>
                    </div>
                  </>
                )}

                {step === 4 && !isTyping && scenario === 'alta' && altaPath[1] === 'Vendrá siempre (Recurrente)' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-2 pl-8">
                    <button onClick={() => handleAltaOption('Familiar/Residente', 5)} className="bg-zinc-50 border border-zinc-200 text-zinc-600 text-xs py-2 px-4 rounded-full text-left hover:bg-zinc-100 transition-colors">
                      Familiar/Residente
                    </button>
                    <button onClick={() => handleAltaOption('Servicio (Limpieza/Reformas)', 99)} className="bg-zinc-50 border border-zinc-200 text-zinc-600 text-xs py-2 px-4 rounded-full text-left hover:bg-zinc-100 transition-colors">
                      Servicio (Limpieza/Reformas)
                    </button>
                  </motion.div>
                )}

                {step >= 5 && scenario === 'alta' && altaPath[2] === 'Familiar/Residente' && (
                  <>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="self-end bg-indigo-600 rounded-2xl rounded-tr-none p-3 text-xs text-zinc-900 max-w-[85%]">
                      Familiar/Residente
                    </motion.div>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full bg-indigo-600 flex-shrink-0 flex items-center justify-center mt-1">
                        <Bot className="w-3 h-3 text-zinc-900" />
                      </div>
                      <div className="bg-zinc-100 rounded-2xl rounded-tl-none p-3 text-xs text-zinc-800 max-w-[85%] whitespace-pre-wrap">
                        {isTyping && step === 5 ? <Loader2 className="w-4 h-4 animate-spin text-zinc-500" /> : "Para esto lo mejor es un mando físico o una llave digital permanente. ¿Ya tienes el mando?"}
                      </div>
                    </div>
                  </>
                )}

                {step === 5 && !isTyping && scenario === 'alta' && altaPath[2] === 'Familiar/Residente' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-2 pl-8">
                    <button onClick={() => handleAltaOption('Sí, ya lo tengo', 99)} className="bg-zinc-50 border border-zinc-200 text-zinc-600 text-xs py-2 px-4 rounded-full text-left hover:bg-zinc-100 transition-colors">
                      Sí, ya lo tengo
                    </button>
                    <button onClick={() => handleAltaOption('No, no tengo mando', 6)} className="bg-zinc-50 border border-zinc-200 text-zinc-600 text-xs py-2 px-4 rounded-full text-left hover:bg-zinc-100 transition-colors">
                      No, no tengo mando
                    </button>
                  </motion.div>
                )}

                {step >= 6 && scenario === 'alta' && altaPath[3] === 'No, no tengo mando' && (
                  <>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="self-end bg-indigo-600 rounded-2xl rounded-tr-none p-3 text-xs text-zinc-900 max-w-[85%]">
                      No, no tengo mando
                    </motion.div>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full bg-indigo-600 flex-shrink-0 flex items-center justify-center mt-1">
                        <Bot className="w-3 h-3 text-zinc-900" />
                      </div>
                      <div className="bg-zinc-100 rounded-2xl rounded-tl-none p-3 text-xs text-zinc-800 max-w-[85%] whitespace-pre-wrap">
                        {isTyping && step === 6 ? <Loader2 className="w-4 h-4 animate-spin text-zinc-500" /> : "Debes comprarlo en la web o pedírselo al Administrador de Fincas (AAFF). ¿Quieres el contacto?"}
                      </div>
                    </div>
                  </>
                )}

                {step === 6 && !isTyping && scenario === 'alta' && altaPath[3] === 'No, no tengo mando' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-2 pl-8">
                    <button onClick={() => handleAltaOption('No sé qué es el AAFF o no tengo mando...', 7)} className="bg-zinc-50 border border-zinc-200 text-zinc-600 text-xs py-2 px-4 rounded-full text-left hover:bg-zinc-100 transition-colors">
                      No sé qué es el AAFF o no tengo mando...
                    </button>
                  </motion.div>
                )}

                {step >= 7 && scenario === 'alta' && altaPath[4] === 'No sé qué es el AAFF o no tengo mando...' && (
                  <>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="self-end bg-indigo-600 rounded-2xl rounded-tr-none p-3 text-xs text-zinc-900 max-w-[85%]">
                      No sé qué es el AAFF o no tengo mando...
                    </motion.div>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full bg-indigo-600 flex-shrink-0 flex items-center justify-center mt-1">
                        <Bot className="w-3 h-3 text-zinc-900" />
                      </div>
                      <div className="bg-zinc-100 rounded-2xl rounded-tl-none p-3 text-xs text-zinc-800 max-w-[85%] whitespace-pre-wrap">
                        {isTyping && step === 7 ? <Loader2 className="w-4 h-4 animate-spin text-zinc-500" /> : "El AAFF es el Administrador; ellos gestionan las altas oficiales en la base de datos del edificio. Si lo que quieres es entrar YA mismo y no tienes mando, puedo ofrecerte dos cosas:"}
                      </div>
                    </div>
                  </>
                )}

                {step === 7 && !isTyping && scenario === 'alta' && altaPath[4] === 'No sé qué es el AAFF o no tengo mando...' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-2 pl-8">
                    <button onClick={() => handleAltaOption('Comprar mando rápido', 8)} className="bg-indigo-600/20 border border-indigo-500/30 text-indigo-300 text-xs py-2 px-4 rounded-full text-left hover:bg-indigo-600/30 transition-colors">
                      Comprar mando rápido
                    </button>
                    <button onClick={() => handleAltaOption('Activar llave Bluetooth', 99)} className="bg-zinc-50 border border-zinc-200 text-zinc-600 text-xs py-2 px-4 rounded-full text-left hover:bg-zinc-100 transition-colors">
                      Activar llave Bluetooth
                    </button>
                  </motion.div>
                )}

                {step >= 8 && scenario === 'alta' && altaPath[5] === 'Comprar mando rápido' && (
                  <>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="self-end bg-indigo-600 rounded-2xl rounded-tr-none p-3 text-xs text-zinc-900 max-w-[85%]">
                      Comprar mando rápido
                    </motion.div>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full bg-indigo-600 flex-shrink-0 flex items-center justify-center mt-1">
                        <Bot className="w-3 h-3 text-zinc-900" />
                      </div>
                      <div className="bg-zinc-100 rounded-2xl rounded-tl-none p-3 text-xs text-zinc-800 max-w-[85%] whitespace-pre-wrap">
                        {isTyping && step === 8 ? <Loader2 className="w-4 h-4 animate-spin text-zinc-500" /> : "Perfecto. Veo que perteneces a la Comunidad Los Olivos. El coste del mando es de 35€. ¿Confirmas el pedido?"}
                      </div>
                    </div>
                  </>
                )}

                {step === 8 && !isTyping && scenario === 'alta' && altaPath[5] === 'Comprar mando rápido' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-2 pl-8">
                    <button onClick={() => {
                      setStep(9);
                      setIsTyping(true);
                      setTimeout(() => {
                        setIsTyping(false);
                        setStep(10);
                        if (!completedScenarios.includes('mando')) {
                          setCompletedScenarios(prev => [...prev, 'mando']);
                        }
                      }, 2000);
                    }} className="bg-indigo-600 text-white text-xs py-2 px-4 rounded-full text-center hover:bg-indigo-700 transition-colors">
                      Sí, confirmar pedido
                    </button>
                    <button onClick={resetDemo} className="bg-zinc-100 text-zinc-600 text-xs py-2 px-4 rounded-full text-center hover:bg-zinc-200 transition-colors">
                      Cancelar
                    </button>
                  </motion.div>
                )}

                {step >= 9 && scenario === 'alta' && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="self-end bg-indigo-600 rounded-2xl rounded-tr-none p-3 text-xs text-zinc-900 max-w-[85%]">
                    Sí, confirmar pedido
                  </motion.div>
                )}

                {step >= 10 && scenario === 'alta' && (
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-indigo-600 flex-shrink-0 flex items-center justify-center mt-1">
                      <Bot className="w-3 h-3 text-zinc-900" />
                    </div>
                    <div className="bg-zinc-100 rounded-2xl rounded-tl-none p-3 text-xs text-zinc-800 max-w-[85%] whitespace-pre-wrap">
                      {isTyping && step === 10 ? <Loader2 className="w-4 h-4 animate-spin text-zinc-500" /> : "Pedido confirmado. Hemos generado una alerta para el administrador. Recibirás el mando en 24-48h."}
                    </div>
                  </div>
                )}

                {step >= 99 && scenario === 'alta' && (
                  <>
                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="self-end bg-indigo-600 rounded-2xl rounded-tr-none p-3 text-xs text-zinc-900 max-w-[85%]">
                      {altaPath[altaPath.length - 1]}
                    </motion.div>
                    <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full bg-indigo-600 flex-shrink-0 flex items-center justify-center mt-1">
                        <Bot className="w-3 h-3 text-zinc-900" />
                      </div>
                      <div className="bg-zinc-100 rounded-2xl rounded-tl-none p-3 text-xs text-zinc-800 max-w-[85%] whitespace-pre-wrap">
                        {isTyping && step === 99 ? <Loader2 className="w-4 h-4 animate-spin text-zinc-500" /> : 
                         altaPath[altaPath.length - 1] === 'Para mí' ? "Perfecto, te guiaré para configurar tu propio acceso." :
                         altaPath[altaPath.length - 1] === 'Usará su móvil' ? "Perfecto. Introduce su móvil aquí y le llegará un enlace con un botón de apertura válido solo por 48h. ¿Te parece bien?" :
                         altaPath[altaPath.length - 1] === 'Estaré yo allí' ? "Entonces no necesitas darle de alta. Puedes usar la función 'Apertura Remota' desde tu app cuando llegue. ¿Quieres ver cómo se hace?" :
                         altaPath[altaPath.length - 1] === 'Servicio (Limpieza/Reformas)' ? "Ojo, para estos casos recomendamos 'Horarios Restringidos'. ¿Quieres que solo pueda entrar, por ejemplo, los martes de 9:00 a 14:00?" :
                         altaPath[altaPath.length - 1] === 'Sí, ya lo tengo' ? "Genial, entonces solo necesitas vincularlo en la sección 'Mis Mandos'." :
                         altaPath[altaPath.length - 1] === 'Activar llave Bluetooth' ? "De acuerdo, vamos a activar tu llave Bluetooth. Asegúrate de tener el Bluetooth encendido." :
                         "Opción seleccionada."}
                      </div>
                    </div>
                  </>
                )}

                {step === 1 && !isTyping && (scenario === 'incidencia' || scenario === 'piscina' || scenario === 'comunidad') && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-2 pl-8">
                    <button onClick={handlePhotoUpload} className="bg-zinc-100 border border-zinc-300 text-zinc-900 text-xs py-3 px-4 rounded-xl flex items-center justify-center gap-2 hover:bg-zinc-200 transition-colors">
                      <Camera className="w-4 h-4" /> Tomar foto
                    </button>
                  </motion.div>
                )}

                {step === 1 && !isTyping && scenario === 'duda' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-2 pl-8">
                    <button onClick={handleDudaResponse} className="bg-zinc-100 border border-zinc-300 text-zinc-900 text-xs py-2 px-4 rounded-full text-left hover:bg-zinc-200 transition-colors">
                      Es un mando TX4
                    </button>
                  </motion.div>
                )}

                {step === 1 && !isTyping && scenario === 'mando' && (
                  <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="flex flex-col gap-2 pl-8">
                    <button onClick={handleConfirmOrder} className="bg-indigo-600 text-white text-xs py-2 px-4 rounded-full text-center hover:bg-indigo-700 transition-colors">
                      Sí, confirmar pedido
                    </button>
                    <button onClick={resetDemo} className="bg-zinc-100 text-zinc-600 text-xs py-2 px-4 rounded-full text-center hover:bg-zinc-200 transition-colors">
                      Cancelar
                    </button>
                  </motion.div>
                )}

                {step >= 2 && (scenario === 'incidencia' || scenario === 'piscina' || scenario === 'comunidad') && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="self-end bg-indigo-600 rounded-2xl rounded-tr-none p-2 max-w-[85%]">
                    <div className="w-32 h-24 bg-zinc-100 rounded-lg flex items-center justify-center border border-zinc-200">
                      <ImageIcon className="w-6 h-6 text-zinc-400" />
                    </div>
                  </motion.div>
                )}

                {step >= 2 && scenario === 'duda' && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="self-end bg-indigo-600 rounded-2xl rounded-tr-none p-3 text-xs text-zinc-900 max-w-[85%]">
                    Es un mando TX4
                  </motion.div>
                )}

                {step >= 2 && scenario === 'mando' && (
                  <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="self-end bg-indigo-600 rounded-2xl rounded-tr-none p-3 text-xs text-zinc-900 max-w-[85%]">
                    Sí, confirmar pedido
                  </motion.div>
                )}

                {step >= 2 && scenario !== 'alta' && (
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-indigo-600 flex-shrink-0 flex items-center justify-center mt-1">
                      <Bot className="w-3 h-3 text-zinc-900" />
                    </div>
                    <div className="bg-zinc-100 rounded-2xl rounded-tl-none p-3 text-xs text-zinc-800 max-w-[85%] whitespace-pre-wrap">
                      {isTyping && step === 2 ? (
                        <Loader2 className="w-4 h-4 animate-spin text-zinc-500" />
                      ) : (scenario === 'incidencia' || scenario === 'piscina' || scenario === 'comunidad') ? (
                        "¡Gracias! He notificado al técnico. Tu número de incidencia es #1042."
                      ) : scenario === 'duda' ? (
                        "Para programar tu mando TX4:\n1. Pulsa el botón oculto con un clip.\n2. Pulsa el botón que quieres programar.\n3. Espera 10 segundos.\n¡Listo!"
                      ) : (
                        "Pedido confirmado. Hemos generado una alerta para el administrador. Recibirás el mando en 24-48h."
                      )}
                    </div>
                  </div>
                )}

                {step >= 4 && scenario !== 'alta' && scenario !== 'duda' && (
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-indigo-600 flex-shrink-0 flex items-center justify-center mt-1">
                      <Bot className="w-3 h-3 text-zinc-900" />
                    </div>
                    <div className="bg-zinc-100 rounded-2xl rounded-tl-none p-3 text-xs text-zinc-800 max-w-[85%]">
                      {isTyping && step === 4 ? (
                        <Loader2 className="w-4 h-4 animate-spin text-zinc-500" />
                      ) : (scenario === 'incidencia' || scenario === 'piscina' || scenario === 'comunidad') ? (
                        "🔔 Actualización: El técnico Carlos M. ha sido asignado a tu incidencia y está en camino. Tiempo estimado: 45 min."
                      ) : (
                        "🔔 Actualización: Tu mando ha sido preparado para envío. Lo recibirás mañana por la mañana."
                      )}
                    </div>
                  </div>
                )}

                {step >= 11 && scenario === 'alta' && (
                  <div className="flex gap-2">
                    <div className="w-6 h-6 rounded-full bg-indigo-600 flex-shrink-0 flex items-center justify-center mt-1">
                      <Bot className="w-3 h-3 text-zinc-900" />
                    </div>
                    <div className="bg-zinc-100 rounded-2xl rounded-tl-none p-3 text-xs text-zinc-800 max-w-[85%] whitespace-pre-wrap">
                      {isTyping && step === 11 ? (
                        <Loader2 className="w-4 h-4 animate-spin text-zinc-500" />
                      ) : (
                        "🔔 Actualización: Tu mando ha sido preparado para envío. Lo recibirás mañana por la mañana."
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Chat Input */}
              <div className="bg-white p-3 border-t border-zinc-200 flex gap-2 items-center">
                <div className="flex-1 bg-zinc-900 border border-zinc-200 rounded-full h-8 px-3 flex items-center text-[10px] text-zinc-400">
                  Escribe un mensaje...
                </div>
                <div className="w-8 h-8 rounded-full bg-indigo-600 flex items-center justify-center">
                  <Send className="w-3 h-3 text-white ml-0.5" />
                </div>
              </div>
            </div>
          </div>

          {/* Desktop Dashboard View */}
          <div className="lg:col-span-8">
            <div className="w-full h-[600px] bg-white border border-zinc-200 rounded-2xl shadow-2xl flex flex-col overflow-hidden relative">
              
              {/* Dashboard Header */}
              <div className="h-14 border-b border-zinc-200 flex items-center px-6 gap-4 bg-zinc-50">
                <div className="font-semibold text-zinc-900 flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-indigo-500" /> Umbral
                </div>
                <div className="flex-1 flex justify-center">
                  <div className="w-96 h-8 bg-zinc-50 border border-zinc-200 rounded-md flex items-center px-3 gap-2 text-zinc-400">
                    <Search className="w-4 h-4" /> <span className="text-xs">Buscar incidencia, comunidad...</span>
                  </div>
                </div>
                <div className="w-8 h-8 rounded-full bg-indigo-500/20 border border-indigo-500/50 flex items-center justify-center text-indigo-300 text-xs font-medium">
                  JD
                </div>
              </div>

              {/* Dashboard Body */}
              <div className="flex-1 flex overflow-hidden">
                {/* Sidebar */}
                <div className="w-48 border-r border-zinc-200 bg-zinc-50 p-4 flex flex-col gap-2">
                  <button 
                    onClick={() => setActiveTab('inbox')}
                    className={`px-3 py-2 rounded-lg flex items-center gap-3 text-sm font-medium transition-colors w-full text-left ${activeTab === 'inbox' ? 'bg-indigo-50 text-indigo-600' : 'text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800'}`}
                  >
                    <Inbox className="w-4 h-4" /> Bandeja
                  </button>
                  <button 
                    onClick={() => setActiveTab('buildings')}
                    className={`px-3 py-2 rounded-lg flex items-center gap-3 text-sm font-medium transition-colors w-full text-left ${activeTab === 'buildings' ? 'bg-indigo-50 text-indigo-600' : 'text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800'}`}
                  >
                    <Building2 className="w-4 h-4" /> Edificios
                  </button>
                  <button 
                    onClick={() => setActiveTab('team')}
                    className={`px-3 py-2 rounded-lg flex items-center gap-3 text-sm font-medium transition-colors w-full text-left ${activeTab === 'team' ? 'bg-indigo-50 text-indigo-600' : 'text-zinc-500 hover:bg-zinc-100 hover:text-zinc-800'}`}
                  >
                    <Wrench className="w-4 h-4" /> Equipo
                  </button>
                </div>

                {/* Main Content Area */}
                {activeTab === 'inbox' && (
                  <>
                    {/* Ticket List */}
                    <div className="w-72 border-r border-zinc-200 bg-white flex flex-col">
                      <div className="p-4 border-b border-zinc-200 font-medium text-zinc-800 text-sm flex justify-between items-center">
                        Incidencias activas
                        <span className="bg-zinc-100 text-xs px-2 py-0.5 rounded-full">{3 + (step >= 3 ? 1 : 0) + completedScenarios.length}</span>
                      </div>
                      <div className="flex-1 overflow-y-auto">
                        <AnimatePresence>
                          {step >= 3 && (scenario === 'incidencia' || scenario === 'piscina' || scenario === 'comunidad') && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0, backgroundColor: scenario === 'comunidad' ? 'rgba(239, 68, 68, 0.1)' : scenario === 'piscina' ? 'rgba(249, 115, 22, 0.1)' : 'rgba(79, 70, 229, 0.1)' }} 
                              animate={{ opacity: 1, height: 'auto', backgroundColor: 'rgba(255, 255, 255, 1)' }} 
                              className="p-4 border-b border-zinc-100 cursor-pointer relative overflow-hidden"
                            >
                              <div className={`absolute left-0 top-0 bottom-0 w-1 ${scenario === 'comunidad' ? 'bg-red-500' : scenario === 'piscina' ? 'bg-orange-500' : 'bg-indigo-500'}`} />
                              <div className="flex justify-between items-start mb-2">
                                {scenario === 'comunidad' ? (
                                  <span className="text-[10px] font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded border border-red-200 animate-pulse">URGENCIA MÁXIMA</span>
                                ) : scenario === 'piscina' ? (
                                  <span className="text-[10px] font-medium text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-100">MEDIA</span>
                                ) : (
                                  <span className="text-[10px] font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">NUEVO</span>
                                )}
                                <span className="text-[10px] text-zinc-400">Ahora</span>
                              </div>
                              <div className="font-medium text-zinc-900 mb-1 text-sm">
                                {scenario === 'comunidad' ? 'Puerta comunidad rota' : scenario === 'piscina' ? 'Puerta piscina no abre' : 'Puerta garaje no abre'}
                              </div>
                              <div className="text-xs text-zinc-500 flex items-center gap-1">
                                <MapPin className="w-3 h-3" /> Comunidad Los Olivos
                              </div>
                            </motion.div>
                          )}
                          {step >= 3 && scenario === 'mando' && (
                            <motion.div 
                              initial={{ opacity: 0, height: 0, backgroundColor: 'rgba(16, 185, 129, 0.1)' }} 
                              animate={{ opacity: 1, height: 'auto', backgroundColor: 'rgba(255, 255, 255, 1)' }} 
                              className="p-4 border-b border-zinc-100 cursor-pointer relative overflow-hidden"
                            >
                              <div className="absolute left-0 top-0 bottom-0 w-1 bg-emerald-500" />
                              <div className="flex justify-between items-start mb-2">
                                <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">PEDIDO</span>
                                <span className="text-[10px] text-zinc-400">Ahora</span>
                              </div>
                              <div className="font-medium text-zinc-900 mb-1 text-sm">Nuevo mando solicitado</div>
                              <div className="text-xs text-zinc-500 flex items-center gap-1">
                                <User className="w-3 h-3" /> Vecino 4ºB - Los Olivos
                              </div>
                            </motion.div>
                          )}
                          
                          {/* Render completed scenarios */}
                          {completedScenarios.map((completedScenario, idx) => (
                            <motion.div 
                              key={`completed-${idx}`}
                              initial={{ opacity: 0, height: 0 }} 
                              animate={{ opacity: 1, height: 'auto' }} 
                              className="p-4 border-b border-zinc-100 cursor-pointer relative overflow-hidden opacity-60 hover:opacity-100"
                            >
                              {completedScenario === 'incidencia' || completedScenario === 'piscina' || completedScenario === 'comunidad' ? (
                                <>
                                  <div className={`absolute left-0 top-0 bottom-0 w-1 ${completedScenario === 'comunidad' ? 'bg-red-500' : completedScenario === 'piscina' ? 'bg-orange-500' : 'bg-indigo-500'}`} />
                                  <div className="flex justify-between items-start mb-2">
                                    {completedScenario === 'comunidad' ? (
                                      <span className="text-[10px] font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded border border-red-200">URGENCIA MÁXIMA</span>
                                    ) : completedScenario === 'piscina' ? (
                                      <span className="text-[10px] font-medium text-orange-600 bg-orange-50 px-2 py-0.5 rounded border border-orange-100">MEDIA</span>
                                    ) : (
                                      <span className="text-[10px] font-medium text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-100">NUEVO</span>
                                    )}
                                    <span className="text-[10px] text-zinc-400">Hace unos min</span>
                                  </div>
                                  <div className="font-medium text-zinc-900 mb-1 text-sm">
                                    {completedScenario === 'comunidad' ? 'Puerta comunidad rota' : completedScenario === 'piscina' ? 'Puerta piscina no abre' : 'Puerta garaje no abre'}
                                  </div>
                                  <div className="text-xs text-zinc-500 flex items-center gap-1">
                                    <MapPin className="w-3 h-3" /> Comunidad Los Olivos
                                  </div>
                                </>
                              ) : (
                                <>
                                  <div className="flex justify-between items-start mb-2">
                                    <span className="text-[10px] font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-100">PEDIDO</span>
                                    <span className="text-[10px] text-zinc-400">Hace unos min</span>
                                  </div>
                                  <div className="font-medium text-zinc-900 mb-1 text-sm">Nuevo mando solicitado</div>
                                  <div className="text-xs text-zinc-500 flex items-center gap-1">
                                    <User className="w-3 h-3" /> Vecino 4ºB - Los Olivos
                                  </div>
                                </>
                              )}
                            </motion.div>
                          ))}
                        </AnimatePresence>

                        <div className={`p-4 border-b border-zinc-100 cursor-pointer ${step < 3 ? 'bg-zinc-50 relative' : 'opacity-60 hover:opacity-100'}`}>
                          {step < 3 && <div className="absolute left-0 top-0 bottom-0 w-1 bg-zinc-400" />}
                          <div className="flex justify-between items-start mb-2">
                            <span className="text-[10px] font-medium text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded">Revisión</span>
                            <span className="text-[10px] text-zinc-400">Hace 2h</span>
                          </div>
                          <div className="font-medium text-zinc-800 mb-1 text-sm">Mando no responde</div>
                          <div className="text-xs text-zinc-500 flex items-center gap-1">
                            <MapPin className="w-3 h-3" /> Edificio Norte 24
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Ticket Detail */}
                    <div className="flex-1 bg-zinc-50 p-6 flex flex-col gap-6 overflow-y-auto relative">
                      {step >= 3 && (scenario === 'incidencia' || scenario === 'piscina' || scenario === 'comunidad') ? (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-6">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h2 className="text-xl font-semibold text-zinc-900">
                                {scenario === 'comunidad' ? 'Puerta comunidad rota' : scenario === 'piscina' ? 'Puerta piscina no abre' : 'Puerta garaje no abre'}
                              </h2>
                              <span className="text-xs font-medium text-zinc-500 bg-zinc-200 px-2 py-1 rounded-md">#1042</span>
                              {scenario === 'comunidad' && (
                                <span className="text-xs font-bold text-red-600 bg-red-100 px-2 py-1 rounded-md animate-pulse">URGENCIA MÁXIMA</span>
                              )}
                              {scenario === 'piscina' && (
                                <span className="text-xs font-medium text-orange-600 bg-orange-100 px-2 py-1 rounded-md">PRIORIDAD MEDIA</span>
                              )}
                            </div>
                            <div className="text-sm text-zinc-500 flex items-center gap-2">
                              <MapPin className="w-4 h-4" /> Comunidad Los Olivos, C/ Mayor 12
                            </div>
                          </div>

                          <div className="grid grid-cols-2 gap-4">
                            <div className={`${diagColor.bg} border ${diagColor.border} rounded-xl p-4 relative overflow-hidden`}>
                              <div className={`absolute top-0 right-0 w-16 h-16 ${diagColor.blur} blur-xl opacity-50`} />
                              <div className={`text-xs ${diagColor.text} mb-2 uppercase tracking-wider font-semibold flex items-center gap-2`}>
                                <Bot className="w-4 h-4" /> Pre-Diagnóstico IA
                              </div>
                              <div className={`text-sm ${diagColor.textDark} leading-relaxed`}>
                                {scenario === 'comunidad' ? 
                                  'La imagen muestra la puerta principal desencajada. Supone un riesgo de seguridad grave para la comunidad. Requiere intervención inmediata.' : 
                                 scenario === 'piscina' ? 
                                  'La imagen muestra la cerradura de la piscina bloqueada. No hay riesgo de seguridad, pero afecta al uso de zonas comunes.' : 
                                  'La imagen muestra un obstáculo frente a la fotocélula de seguridad. Alta probabilidad de que el motor esté bloqueado por seguridad, no por avería mecánica.'}
                              </div>
                            </div>
                            <div className="bg-white border border-zinc-200 rounded-xl p-4">
                              <div className="text-xs text-zinc-400 mb-2 uppercase tracking-wider font-semibold">Evidencia adjunta</div>
                              <div className="w-full h-24 bg-zinc-100 rounded-lg flex items-center justify-center border border-zinc-200 overflow-hidden relative group">
                                <ImageIcon className="w-8 h-8 text-zinc-300" />
                                <div className="absolute inset-0 bg-zinc-900/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity cursor-pointer">
                                  <span className="text-xs text-white font-medium">Ver foto</span>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div className="flex-1 border border-zinc-200 rounded-xl bg-white p-5 flex flex-col gap-5">
                            <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider border-b border-zinc-100 pb-3">Trazabilidad</div>
                            {step >= 4 && (
                              <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                </div>
                                <div>
                                  <div className="text-sm text-zinc-800 font-medium">Técnico asignado (Carlos M.)</div>
                                  <div className="text-xs text-zinc-400 mt-0.5">Ahora mismo</div>
                                </div>
                              </div>
                            )}
                            <div className="flex gap-4">
                              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                                <Bot className="w-4 h-4 text-indigo-600" />
                              </div>
                              <div>
                                <div className="text-sm text-zinc-800 font-medium">Incidencia capturada por Asistente IA</div>
                                <div className="text-xs text-zinc-400 mt-0.5">{step >= 4 ? 'Hace unos min' : 'Ahora mismo'}</div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex gap-3 mt-auto">
                            {step === 3 ? (
                              <button onClick={handleAdminAction} className="bg-indigo-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-indigo-700 transition-colors flex-1">
                                Asignar Técnico
                              </button>
                            ) : (
                              <button disabled className="bg-emerald-50 text-emerald-600 border border-emerald-200 px-4 py-2 rounded-lg text-sm font-medium flex-1 flex items-center justify-center gap-2">
                                <CheckCircle2 className="w-4 h-4" /> Técnico Asignado
                              </button>
                            )}
                            <button className="bg-zinc-100 text-zinc-900 px-4 py-2 rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors border border-zinc-200">
                              Descartar
                            </button>
                          </div>
                        </motion.div>
                      ) : step >= 3 && scenario === 'mando' ? (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex flex-col gap-6">
                          <div>
                            <div className="flex items-center gap-3 mb-2">
                              <h2 className="text-xl font-semibold text-zinc-900">Pedido de Mando Nuevo</h2>
                              <span className="text-xs font-medium text-emerald-600 bg-emerald-100 px-2 py-1 rounded-md">#P-8821</span>
                            </div>
                            <div className="text-sm text-zinc-500 flex items-center gap-2">
                              <User className="w-4 h-4" /> Juan Pérez - Vecino 4ºB, Comunidad Los Olivos
                            </div>
                          </div>

                          <div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm">
                            <h3 className="text-sm font-semibold text-zinc-900 mb-4">Detalles del pedido</h3>
                            <div className="space-y-3">
                              <div className="flex justify-between text-sm">
                                <span className="text-zinc-500">Producto</span>
                                <span className="font-medium text-zinc-900">Mando Garaje Universal TX4</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-zinc-500">Cantidad</span>
                                <span className="font-medium text-zinc-900">1</span>
                              </div>
                              <div className="flex justify-between text-sm">
                                <span className="text-zinc-500">Precio</span>
                                <span className="font-medium text-zinc-900">35,00 €</span>
                              </div>
                              <div className="pt-3 border-t border-zinc-100 flex justify-between text-sm">
                                <span className="text-zinc-500">Estado del pago</span>
                                <span className="font-medium text-emerald-600 flex items-center gap-1"><CheckCircle2 className="w-4 h-4" /> Completado</span>
                              </div>
                            </div>
                          </div>

                          <div className="flex-1 border border-zinc-200 rounded-xl bg-white p-5 flex flex-col gap-5">
                            <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider border-b border-zinc-100 pb-3">Acciones Automáticas</div>
                            {step >= 4 && (
                              <div className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                                </div>
                                <div>
                                  <div className="text-sm text-zinc-800 font-medium">Envío preparado</div>
                                  <div className="text-xs text-zinc-400 mt-0.5">Ahora mismo</div>
                                </div>
                              </div>
                            )}
                            <div className="flex gap-4">
                              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
                                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                              </div>
                              <div>
                                <div className="text-sm text-zinc-800 font-medium">Pedido registrado en el sistema</div>
                                <div className="text-xs text-zinc-400 mt-0.5">{step >= 4 ? 'Hace unos min' : 'Ahora mismo'}</div>
                              </div>
                            </div>
                            <div className="flex gap-4">
                              <div className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center shrink-0">
                                <Bot className="w-4 h-4 text-indigo-600" />
                              </div>
                              <div>
                                <div className="text-sm text-zinc-800 font-medium">Aviso enviado al administrador de fincas</div>
                                <div className="text-xs text-zinc-400 mt-0.5">{step >= 4 ? 'Hace unos min' : 'Ahora mismo'}</div>
                              </div>
                            </div>
                          </div>
                          
                          <div className="flex gap-3 mt-auto">
                            {step === 3 ? (
                              <button onClick={handleAdminAction} className="bg-emerald-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors flex-1">
                                Preparar Envío
                              </button>
                            ) : (
                              <button disabled className="bg-emerald-50 text-emerald-600 border border-emerald-200 px-4 py-2 rounded-lg text-sm font-medium flex-1 flex items-center justify-center gap-2">
                                <CheckCircle2 className="w-4 h-4" /> Envío Preparado
                              </button>
                            )}
                          </div>
                        </motion.div>
                      ) : (
                        <div className="flex flex-col items-center justify-center h-full text-zinc-400 gap-4 opacity-50">
                          <Inbox className="w-12 h-12" />
                          <p className="text-sm text-center max-w-xs">Interactúa con el chat de la izquierda para ver cómo entra una nueva incidencia o pedido.</p>
                        </div>
                      )}
                    </div>
                  </>
                )}

                {activeTab === 'buildings' && (
                  <div className="flex-1 bg-zinc-50 p-6 overflow-y-auto">
                    <h2 className="text-xl font-semibold text-zinc-900 mb-6">Comunidades gestionadas</h2>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                      <div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-semibold text-zinc-900 text-base">Comunidad Los Olivos</h3>
                            <div className="text-xs text-zinc-500 flex items-center gap-1 mt-1"><MapPin className="w-3 h-3"/> C/ Mayor 12</div>
                          </div>
                          {step >= 3 && (scenario === 'incidencia' || scenario === 'piscina' || scenario === 'comunidad') ? (
                            <span className="bg-red-50 text-red-600 border border-red-100 text-[10px] px-2 py-1 rounded-md font-medium">1 Incidencia</span>
                          ) : step >= 3 && scenario === 'mando' ? (
                            <span className="bg-emerald-50 text-emerald-600 border border-emerald-100 text-[10px] px-2 py-1 rounded-md font-medium">1 Pedido</span>
                          ) : (
                            <span className="bg-emerald-50 text-emerald-600 border border-emerald-100 text-[10px] px-2 py-1 rounded-md font-medium">Todo en orden</span>
                          )}
                        </div>
                        <div className="flex items-center gap-4 text-xs text-zinc-500 border-t border-zinc-100 pt-4">
                          <div className="flex items-center gap-1"><Building2 className="w-3 h-3" /> 4 Accesos</div>
                          <div className="flex items-center gap-1"><Clock className="w-3 h-3" /> Últ. rev: 12 May</div>
                        </div>
                      </div>
                      <div className="bg-white border border-zinc-200 rounded-xl p-5 shadow-sm">
                        <div className="flex justify-between items-start mb-4">
                          <div>
                            <h3 className="font-semibold text-zinc-900 text-base">Edificio Norte 24</h3>
                            <div className="text-xs text-zinc-500 flex items-center gap-1 mt-1"><MapPin className="w-3 h-3"/> Av. Norte 24</div>
                          </div>
                          <span className="bg-yellow-50 text-yellow-600 border border-yellow-100 text-[10px] px-2 py-1 rounded-md font-medium">1 Revisión</span>
                        </div>
                        <div className="flex items-center gap-4 text-xs text-zinc-500 border-t border-zinc-100 pt-4">
                          <div className="flex items-center gap-1"><Building2 className="w-3 h-3" /> 2 Accesos</div>
                          <div className="flex items-center gap-1"><Clock className="w-3 h-3" /> Últ. rev: 03 Abr</div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}

                {activeTab === 'team' && (
                  <div className="flex-1 bg-zinc-50 p-6 overflow-y-auto">
                    <h2 className="text-xl font-semibold text-zinc-900 mb-6">Equipo Técnico</h2>
                    <div className="flex flex-col gap-3">
                      <div className="bg-white border border-zinc-200 rounded-xl p-4 flex items-center justify-between shadow-sm">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600 font-semibold border border-indigo-100">
                            CM
                          </div>
                          <div>
                            <div className="font-semibold text-zinc-900 text-sm">Carlos M.</div>
                            <div className="text-xs text-zinc-500">Mantenimiento Zona Norte</div>
                          </div>
                        </div>
                        <span className="bg-emerald-50 text-emerald-600 border border-emerald-100 text-[10px] px-2.5 py-1 rounded-full font-medium flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-500" /> Disponible
                        </span>
                      </div>
                      <div className="bg-white border border-zinc-200 rounded-xl p-4 flex items-center justify-between shadow-sm">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-600 font-semibold border border-zinc-200">
                            AG
                          </div>
                          <div>
                            <div className="font-semibold text-zinc-900 text-sm">Ana G.</div>
                            <div className="text-xs text-zinc-500">Instalaciones</div>
                          </div>
                        </div>
                        <span className="bg-yellow-50 text-yellow-600 border border-yellow-100 text-[10px] px-2.5 py-1 rounded-full font-medium flex items-center gap-1.5">
                          <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" /> En ruta
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </div>
              
              {/* Reset Button Overlay */}
              {step >= 3 && (
                <div className="absolute top-4 right-4 flex gap-2">
                  <button onClick={resetDemo} className="bg-indigo-600 hover:bg-indigo-700 text-white text-xs px-3 py-1.5 rounded-full backdrop-blur-md transition-colors flex items-center gap-2 shadow-sm">
                    <Activity className="w-3 h-3" /> Nueva simulación
                  </button>
                  <button onClick={fullReset} className="bg-zinc-100 hover:bg-zinc-200 text-zinc-900 text-xs px-3 py-1.5 rounded-full backdrop-blur-md border border-zinc-200 transition-colors flex items-center gap-2">
                    <RotateCcw className="w-3 h-3" /> Limpiar todo
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Metrics = () => {
  const metrics = [
    { value: "-40%", label: "Visitas innecesarias" },
    { value: "+30%", label: "Capacidad de gestión" },
    { value: "100%", label: "Trazabilidad operativa" },
  ];

  return (
    <section className="py-10 border-y border-zinc-100 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-white/10">
          {metrics.map((metric, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center py-4 md:py-0">
              <span className="text-4xl md:text-5xl font-semibold text-zinc-900 mb-2">{metric.value}</span>
              <span className="text-sm text-zinc-500 uppercase tracking-wider">{metric.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const FeaturesBento = () => {
  return (
    <section className="py-32 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Todo bajo control, en una sola plataforma.</h2>
          <p className="text-zinc-500 text-lg">Diseñado específicamente para resolver el caos operativo del instalador y mantenedor de accesos.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-[minmax(350px,auto)] md:auto-rows-[minmax(380px,auto)]">
          {/* Card 1: Bandeja Única (Large) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 rounded-3xl bg-white border border-zinc-200 p-6 md:p-8 flex flex-col justify-between overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 w-full md:w-[60%] lg:w-[55%] pb-32 md:pb-0">
              <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center mb-6">
                <Inbox className="w-6 h-6 text-zinc-900" />
              </div>
              <h3 className="text-2xl font-medium mb-3">Bandeja única de trabajo</h3>
              <p className="text-zinc-500 leading-relaxed">Gestiona incidencias, reposiciones y seguimiento en un solo lugar. Olvídate de los WhatsApps perdidos y correos traspapelados.</p>
            </div>
            {/* UI Visual: Bandeja */}
            <div className="absolute right-0 bottom-0 translate-x-8 translate-y-8 w-64 bg-white rounded-tl-2xl border-t border-l border-zinc-200 p-3 flex flex-col gap-2 shadow-2xl">
               <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-red-500" />
                 <div className="flex-1"><div className="h-2 w-20 bg-zinc-200 rounded mb-1"/><div className="h-1.5 w-12 bg-zinc-100 rounded"/></div>
               </div>
               <div className="p-2 rounded-lg bg-indigo-500/20 border border-indigo-500/30 flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-yellow-500" />
                 <div className="flex-1"><div className="h-2 w-24 bg-indigo-200/50 rounded mb-1"/><div className="h-1.5 w-16 bg-indigo-200/30 rounded"/></div>
               </div>
               <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center gap-3">
                 <div className="w-2 h-2 rounded-full bg-emerald-500" />
                 <div className="flex-1"><div className="h-2 w-16 bg-zinc-200 rounded mb-1"/><div className="h-1.5 w-10 bg-zinc-100 rounded"/></div>
               </div>
            </div>
          </motion.div>

          {/* Card 2: Entrada Guiada (Medium) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="rounded-3xl bg-white border border-zinc-200 p-6 md:p-8 flex flex-col justify-between overflow-hidden relative group"
          >
            <div className="relative z-10 pb-56 md:pb-64 pr-4 md:pr-0">
              <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center mb-6">
                <Smartphone className="w-6 h-6 text-zinc-900" />
              </div>
              <h3 className="text-xl font-medium mb-3">Entrada guiada</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">Recibe incidencias mejor explicadas y con el contexto necesario desde el primer minuto.</p>
            </div>
            {/* UI Visual: Mobile App */}
            <div className="absolute right-4 bottom-[-40px] w-40 h-64 bg-zinc-900 rounded-t-[2rem] border-t-4 border-x-4 border-zinc-800 p-3 flex flex-col gap-3 shadow-2xl rotate-12 transition-transform group-hover:rotate-6">
              <div className="w-12 h-1 bg-zinc-300 rounded-full mx-auto mb-1" />
              <div className="bg-zinc-100 rounded-lg p-2 text-[9px] text-zinc-600 w-4/5">¿Qué problema tienes con el acceso?</div>
              <div className="bg-indigo-600 rounded-lg p-2 text-[9px] text-zinc-900 self-end w-4/5">La puerta del garaje no se abre con el mando.</div>
              <div className="bg-zinc-100 rounded-lg p-2 text-[9px] text-zinc-600 w-4/5">Por favor, adjunta una foto.</div>
              <div className="w-full h-16 bg-zinc-50 border border-zinc-200 rounded-lg flex items-center justify-center border-dashed mt-auto mb-2">
                <Camera className="w-4 h-4 text-zinc-400" />
              </div>
            </div>
          </motion.div>

          {/* Card 3: Trazabilidad (Medium) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="rounded-3xl bg-white border border-zinc-200 p-6 md:p-8 flex flex-col justify-between overflow-hidden relative group"
          >
            <div className="relative z-10 pb-40 md:pb-48">
              <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center mb-6">
                <Clock className="w-6 h-6 text-zinc-900" />
              </div>
              <h3 className="text-xl font-medium mb-3">Trazabilidad total</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">Justifica mejor cada intervención con evidencias, sin añadir más carga de oficina.</p>
            </div>
            {/* UI Visual: Trazabilidad */}
            <div className="absolute right-4 bottom-4 w-48 bg-white border border-zinc-200 rounded-xl p-4 shadow-2xl translate-y-4 group-hover:translate-y-0 transition-transform">
              <div className="flex gap-3 mb-4 relative">
                <div className="absolute left-[3px] top-3 bottom-[-20px] w-[1px] bg-zinc-100" />
                <div className="w-2 h-2 rounded-full bg-emerald-500 mt-1 relative z-10" />
                <div>
                  <div className="text-[10px] font-medium text-zinc-900">Pieza cambiada</div>
                  <div className="text-[9px] text-zinc-400">12:30</div>
                </div>
              </div>
              <div className="flex gap-3 mb-4 relative">
                <div className="absolute left-[3px] top-3 bottom-[-20px] w-[1px] bg-zinc-100" />
                <div className="w-2 h-2 rounded-full bg-indigo-500 mt-1 relative z-10" />
                <div>
                  <div className="text-[10px] font-medium text-zinc-900">En camino</div>
                  <div className="text-[9px] text-zinc-400">11:45</div>
                </div>
              </div>
              <div className="flex gap-3">
                <div className="w-2 h-2 rounded-full bg-zinc-600 mt-1 relative z-10" />
                <div>
                  <div className="text-[10px] font-medium text-zinc-900">Aviso recibido</div>
                  <div className="text-[9px] text-zinc-400">10:42</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Card 4: Diagnóstico (Large) */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="md:col-span-2 rounded-3xl bg-white border border-zinc-200 p-6 md:p-8 flex flex-col justify-between overflow-hidden relative group"
          >
            <div className="absolute inset-0 bg-gradient-to-tl from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10 w-full md:w-[60%] lg:w-[55%] pb-32 md:pb-0">
              <div className="w-12 h-12 rounded-xl bg-zinc-50 flex items-center justify-center mb-6">
                <BarChart3 className="w-6 h-6 text-zinc-900" />
              </div>
              <h3 className="text-2xl font-medium mb-3">Diagnóstico previo</h3>
              <p className="text-zinc-500 leading-relaxed">Prioriza cada caso con más criterio. Conoce el problema antes de enviar a un técnico y evita desplazamientos innecesarios.</p>
            </div>
             {/* UI Visual: Diagnóstico */}
             <div className="absolute right-8 bottom-8 w-56 bg-white border border-zinc-200 rounded-xl p-4 shadow-2xl flex flex-col gap-3 translate-y-4 group-hover:translate-y-0 transition-transform">
               <div className="flex justify-between items-center">
                 <span className="text-[10px] text-zinc-500 uppercase tracking-wider font-medium">Salud del Motor</span>
                 <span className="text-[10px] font-medium text-red-400 bg-red-400/10 px-1.5 py-0.5 rounded">Crítico</span>
               </div>
               <div className="w-full h-1.5 bg-zinc-100 rounded-full overflow-hidden">
                 <div className="w-[85%] h-full bg-gradient-to-r from-emerald-500 via-yellow-500 to-red-500" />
               </div>
               <div className="grid grid-cols-2 gap-2 mt-1">
                 <div className="bg-zinc-50 rounded p-2 border border-zinc-100">
                   <div className="text-[9px] text-zinc-400 mb-0.5">Ciclos</div>
                   <div className="text-xs font-medium text-zinc-900">45,210</div>
                 </div>
                 <div className="bg-zinc-50 rounded p-2 border border-zinc-100">
                   <div className="text-[9px] text-zinc-400 mb-0.5">Últ. Rev.</div>
                   <div className="text-xs font-medium text-zinc-900">12 May</div>
                 </div>
               </div>
             </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const HowItWorks = () => {
  const steps = [
    {
      title: "Captura estructurada",
      desc: "Convierte llamadas y mensajes sueltos en solicitudes guiadas y completas.",
    },
    {
      title: "Pre-diagnóstico",
      desc: "Recoge contexto y fotos antes de intervenir, preparando mejor al técnico.",
    },
    {
      title: "Gestión operativa",
      desc: "Centraliza incidencias, reposiciones y cambios en una sola bandeja.",
    },
    {
      title: "Trazabilidad",
      desc: "Deja histórico, evidencias y estados para justificar fácilmente el trabajo.",
    }
  ];

  return (
    <section id="how-it-works" className="py-32 bg-white border-t border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold mb-6">Cómo transformamos tu operativa</h2>
          <p className="text-zinc-500 text-lg">Un flujo de trabajo diseñado para eliminar la fricción entre la comunidad y el mantenedor.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          {/* Connecting line for desktop */}
          <div className="hidden md:block absolute top-6 left-[10%] right-[10%] h-[1px] bg-zinc-100" />
          
          {steps.map((step, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative pt-8 md:pt-12"
            >
              <div className="absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 w-12 h-12 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-lg font-semibold z-10">
                {idx + 1}
              </div>
              <div className="md:text-center mt-4">
                <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                <p className="text-zinc-500 text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Testimonials = () => {
  return (
    <section className="py-32 border-t border-zinc-100 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-semibold mb-6">La herramienta que el sector estaba esperando.</h2>
            <p className="text-zinc-500 text-lg mb-8">No desintermediamos. Profesionalizamos al instalador dándole las herramientas para gestionar más con menos esfuerzo.</p>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-indigo-500/10 blur-2xl rounded-full" />
            <div className="relative bg-white/80 border border-zinc-200 p-8 rounded-3xl backdrop-blur-sm">
              <div className="flex gap-1 mb-6">
                {[1,2,3,4,5].map(i => <div key={i} className="w-2 h-2 rounded-full bg-emerald-500" />)}
              </div>
              <p className="text-xl leading-relaxed mb-8">
                "Antes perdíamos horas al teléfono intentando entender qué le pasaba a la puerta. Ahora el técnico llega sabiendo exactamente qué pieza cambiar. Hemos reducido las visitas a ciegas a casi cero."
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-zinc-100 flex items-center justify-center text-xl font-medium">
                  M
                </div>
                <div>
                  <div className="font-medium">Miguel A.</div>
                  <div className="text-sm text-zinc-500">Director Técnico, Instalaciones Access</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "¿Altavia Umbral sustituye la relación del instalador con la comunidad?",
      a: "No. La refuerza. La plataforma está pensada para que el instalador mantenga el control operativo y gane visibilidad, no para desintermediarlo."
    },
    {
      q: "¿Está pensado solo para usuarios que abren con el móvil?",
      a: "No. La adopción será gradual y convivirá con credenciales físicas, porque el mercado tiene una madurez digital heterogénea."
    },
    {
      q: "¿Qué problema resuelve primero?",
      a: "El principal no es tecnológico, es operativo: ordenar incidencias, reposiciones y seguimiento para reducir trabajo administrativo y visitas evitables."
    }
  ];

  return (
    <section className="py-32 border-t border-zinc-100">
      <div className="max-w-3xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-semibold mb-12 text-center">Preguntas Frecuentes</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <details key={idx} className="group rounded-2xl border border-zinc-200 bg-zinc-50/50 overflow-hidden">
              <summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
                <span className="pr-6">{faq.q}</span>
                <span className="transition group-open:rotate-180">
                  <ChevronDown className="w-5 h-5 text-zinc-500" />
                </span>
              </summary>
              <div className="text-zinc-500 px-6 pb-6 leading-relaxed">
                {faq.a}
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
};

const BottomCTA = ({ onOpenModal }: { onOpenModal: () => void }) => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-indigo-600/10" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/20 rounded-full blur-[100px] pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <h2 className="text-4xl md:text-5xl font-semibold mb-6 tracking-tight">Toma el control de tu operativa hoy.</h2>
        <p className="text-xl text-zinc-500 mb-10 max-w-2xl mx-auto">
          Descubre cómo Altavia Umbral puede ayudarte a gestionar más comunidades con el mismo equipo, reduciendo el caos administrativo.
        </p>
        <button 
          onClick={onOpenModal}
          className="bg-zinc-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-zinc-200 transition-colors inline-flex items-center gap-2"
        >
          Solicitar una demo <ArrowRight className="w-5 h-5" />
        </button>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 border-t border-zinc-200 bg-zinc-50 text-zinc-400 text-sm text-center">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2 text-zinc-900">
          <ShieldCheck className="w-5 h-5" />
          <span className="font-semibold">Altavia <span className="text-zinc-500 font-normal">Umbral</span></span>
        </div>
        <p>© {new Date().getFullYear()} Altavia. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

const LeadModal = ({ isOpen, onClose }: { isOpen: boolean, onClose: () => void }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-zinc-900/80 backdrop-blur-sm z-[100]"
          />
          <motion.div 
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-md bg-white border border-zinc-200 rounded-3xl p-8 z-[101] shadow-2xl"
          >
            <button onClick={onClose} className="absolute top-6 right-6 text-zinc-500 hover:text-zinc-900 transition-colors">
              <X className="w-5 h-5" />
            </button>
            
            <h3 className="text-2xl font-semibold mb-2">Solicita una demo</h3>
            <p className="text-zinc-500 text-sm mb-8">Déjanos tus datos y te mostraremos cómo Umbral puede transformar tu operativa diaria.</p>
            
            <form className="space-y-4" onSubmit={(e) => { e.preventDefault(); alert('Formulario enviado (Simulación)'); onClose(); }}>
              <div>
                <label className="block text-sm font-medium text-zinc-600 mb-1.5">Nombre completo</label>
                <input required type="text" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Ej. Juan Pérez" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-600 mb-1.5">Empresa</label>
                <input required type="text" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="Nombre de tu empresa" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-600 mb-1.5">Correo electrónico</label>
                <input required type="email" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="juan@empresa.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-zinc-600 mb-1.5">Teléfono</label>
                <input required type="tel" className="w-full bg-zinc-50 border border-zinc-200 rounded-xl px-4 py-3 text-zinc-900 focus:outline-none focus:border-indigo-500 transition-colors" placeholder="+34 600 000 000" />
              </div>
              <button type="submit" className="w-full bg-indigo-600 text-white py-3.5 rounded-xl font-medium hover:bg-indigo-700 transition-colors mt-4">
                Agendar reunión
              </button>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

// --- Main App ---

export default function App() {
  return (
    <main className="min-h-screen bg-zinc-50">
      <InteractiveDemo />
    </main>
  );
}
