import React, { useState, useEffect } from 'react';
import ObbyVideo from './assets/Obby.mp4';
import BookVideo from './assets/Book.mp4';
import CharacterViewportVideo from './assets/CharacterViewport.mp4';
import CombatSystemVideo from './assets/CombatSystem.mp4';
import GojoBaseVideo from './assets/GojoBase.mp4';
import GojoDomainVideo from './assets/GojoDomain.mp4';
import GojoModeAnimationVideo from './assets/GojoModeAnimation.mp4';
import GojoNukeVideo from './assets/GojoNuke.mp4';
import LikeObserVideo from './assets/LikeObser.mp4';
import PotionMakingVideo from './assets/PotionMaking.mp4';
import SaberHealVideo from './assets/SaberHeal.mp4';
import SukunaVideo from './assets/Sukuna.mp4';
import SungJinwooVideo from './assets/SungJinwoo.mp4';
import TransformVideo from './assets/Transform.mp4';
import WebhookImage from './assets/Webhook.png';
import { 
  Code2, 
  Gamepad2, 
  User, 
  Send, 
  ExternalLink, 
  CheckCircle2, 
  Layers, 
  Zap,
  ChevronRight,
  MessageSquare,
  Play,
  X,
  Cpu,
  Terminal,
  ShieldCheck
} from 'lucide-react';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [showToast, setShowToast] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyDiscord = () => {
  const username = "waxes97";
  const textArea = document.createElement("textarea");
  textArea.value = username;
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand('copy');
    setShowToast(true);
    setTimeout(() => setShowToast(false), 3000);
  } catch (err) {
    console.error('Unable to copy', err);
  }
  document.body.removeChild(textArea);
};

  // Scripting-focused project data
  const projects = [
    {
      id: 1,
      title: "Ryomen Sukuna (Meguna) Moveset",
      type: "video",
      mediaUrl: SukunaVideo,
      thumbnail: "https://i.redd.it/meguna-fuuga-purple-style-by-and-line-art-by-v0-62e1cwyc50xc1.jpg?width=680&format=pjpg&auto=webp&s=a5d89524f8435ef02a782afd938cabf07ee7844b",
      description: "Server-authoritative Meguna combat moveset combining Shrine and Ten Shadows techniques with optimized, state-driven abilities.",
      tags: ["Recent", "Server-Authoritative Combat", "Optimization"]
    },
    {
      id: 2,
      title: "Gojo Satoru's Black Flash + Unlimited Hollow",
      type: "video",
      mediaUrl: GojoNukeVideo, 
      thumbnail: "https://i.ytimg.com/vi/nqFYoblWnY8/maxresdefault.jpg",
      description: "A cinematic combo ability combining Gojo’s Black Flash with Unlimited Hollow, featuring large-scale destruction and performance-optimized visual effects.",
      tags: ["Recent", "Visual Effects","Ability Design","Optimization"]
    },
    {
      id: 3,
      title: "Gojo Satoru's Domain Expansion",
      type: "video",
      mediaUrl: GojoDomainVideo,
      thumbnail: "https://i.ytimg.com/vi/Hvy5eRSx2xY/maxresdefault.jpg",
      description: "Gojo’s Unlimited Void domain expansion with a short cinematic intro inspired by his confrontation with Jogo, emphasizing atmosphere, timing, and visual clarity.",
      tags: ["Recent", "Cinematics", "Visual Effects", "Ability Design"]
    },
     {
      id: 4,
      title: "Gojo Satoru's RCT Awakening",
      type: "video",
      mediaUrl: GojoModeAnimationVideo,
      thumbnail: "https://i.ytimg.com/vi/7i9ZrSwWMI8/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCaF6E11MH5x8oA9zQtlQ9mZtkAsw",
      description: "An awakening mode animation depicting Gojo activating Reverse Cursed Technique after a Toji-inspired flashback, blending cinematic storytelling with smooth character transitions.",
      tags: ["Recent", "Animation", "Cinematics", "Character Design"]
    },
    {
      id: 5,
      title: "Gojo Satoru (Shinjuku) Moveset",
      type: "video",
      mediaUrl: GojoBaseVideo,
      thumbnail: "https://i.ytimg.com/vi/6mVM36RTwd4/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AH-CYAC0AWKAgwIABABGEEgVShyMA8=&rs=AOn4CLDZlzfEoecWJiZCQ2rvZppVSsROHg",
      description: "Server-authoritative Gojo’s combat moveset focused on fluid hand-to-hand combat, precise timing, and clean ability chaining.",
      tags: ["Recent", "Combat Design", "Optimization", "Server-Authoritative Combat"]
    },
    {
      id: 6,
      title: "Advanced Combat System",
      type: "video",
      mediaUrl: CombatSystemVideo,
      thumbnail: "https://imgur.com/JALfmoR.png",
      description: "A responsive combat system featuring air combat, blocks, dodges, parries, deflects, and jump-based counters designed for fluid player expression.",
      tags: ["Recent", "Combat Systems", "State Machines", "Player Mechanics"]
    },
    {
      id: 7,
      title: "Sung Jinwoo's Shadows & Personal Moveset",
      type: "video",
      mediaUrl: SungJinwooVideo,
      thumbnail: "https://static0.gamerantimages.com/wordpress/wp-content/uploads/2025/05/featured-image-jinwoo-sung.jpg?w=1200&h=628&fit=crop",
      description: "Gameplay showcase of Sung Jinwoo’s personal and Shadow Army abilities, including unique dashes, speed bursts, Shadow extraction, and coordinated shadow attacks.",
      tags: ["Somewhat Old", "Combat Systems", "Player Mechanics", "Ability Design"]
    },
    {
      id: 8,
      title: "Saber's Avalon Healing",
      type: "video",
      mediaUrl: SaberHealVideo,
      thumbnail: "https://i.redd.it/d05de0e8av741.jpg",
      description: "Gameplay showcase of Saber’s Avalon healing ability.",
      tags: ["Somewhat Old", "Combat Systems", "Ability Design", "Player Mechanics"]
    },
    {
      id: 9,
      title: "Character Selection Viewport",
      type: "video",
      mediaUrl: CharacterViewportVideo,
      thumbnail: "https://imgur.com/PEd2u0V.png",
      description: "A character selection system featuring a viewport that displays the character model with smooth rotation and interactive previews.",
      tags: ["Old", "UI Systems", "Player Interaction", "3D Viewport"]
    },
    {
      id: 10,
      title: "Potion Crafting System",
      type: "video",
      mediaUrl: PotionMakingVideo,
      thumbnail: "https://imgur.com/gjAyxFV.png",
      description: "A gameplay system where players collect ingredients and combine them in a cauldron to craft potions.",
      tags: ["Old", "Gameplay Systems", "Crafting Mechanics", "Player Interaction"]
    },
    {
      id: 11,
      title: "Revealing Spell",
      type: "video",
      mediaUrl: LikeObserVideo,
      thumbnail: "https://imgur.com/DG4W4vr.png",
      description: "A spell that reveals all players’ locations along with their health and magic, designed for strategic awareness in gameplay.",
      tags: ["Old", "Gameplay Mechanics", "Player Awareness", "Ability Design"]
    },
    {
      id: 12,
      title: "Spellbook System",
      type: "video",
      mediaUrl: BookVideo,
      thumbnail: "https://imgur.com/HNTl1qv.png",
      description: "A fully scripted spellbook showing available spells, who can use them, and dynamically scaled stats, optimized for smooth gameplay and scalability.",
      tags: ["Old", "Gameplay Systems", "UI Systems", "Ability Management"]
    },
    {
      id: 13,
      title: "Random Transformation & Flight",
      type: "video",
      mediaUrl: TransformVideo,
      thumbnail: "https://thumbs.dreamstime.com/b/beautiful-young-angel-girl-heavy-gold-plate-armor-red-fabrics-walks-clouds-sky-huge-mace-her-hands-214908484.jpg",
      description: "A transformation ability that grants flight, enabling aerial movement and maneuvering across the environment.",
      tags: ["Old", "Gameplay Mechanics", "Ability Design", "Movement Systems"]
    },
    {
      id: 14,
      title: "Obby with Checkpoints",
      type: "video",
      mediaUrl: ObbyVideo,
      thumbnail: "https://imgur.com/KRaMbsn.png",
      description: "An obstacle course featuring a Datastore-backed checkpoint system, allowing players to save progress and resume seamlessly.",
      tags: ["Very Old", "Gameplay Systems", "Data Persistence", "Player Progression"]
    },
    {
      id: 15,
      title: "Discord Player Tracker",
      type: "image",
      mediaUrl: WebhookImage,
      thumbnail: "https://i.ytimg.com/vi/d2mjIQCxvuM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLCfept5KMt64xlPhB62bX3w-tA27g",
      description: "A Discord webhook system that logs when players join and leave, along with total playtime, for real-time monitoring and analytics.",
      tags: ["Old", "Backend Systems", "Player Analytics", "Discord Integration"]
    }
  ];

  const closeModal = () => setSelectedMedia(null);

  return (
    <div className="min-h-screen bg-[#0a0a0c] text-slate-200 font-sans selection:bg-purple-500/30">
      <div className={`fixed top-10 left-1/2 -translate-x-1/2 z-[200] transition-all duration-500 transform ${showToast ? 'translate-y-0 opacity-100' : '-translate-y-20 opacity-0 pointer-events-none'}`}>
  <div className="bg-green-600 text-white px-6 py-3 rounded-full shadow-[0_0_30px_rgba(22,163,74,0.4)] flex items-center gap-3 border border-white/20">
    <CheckCircle2 size={20} />
    <span className="font-bold tracking-tight">Discord Username Copied!</span>
  </div>
</div>
      {/* Media Modal */}
      {selectedMedia && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div className="absolute inset-0 bg-black/95 backdrop-blur-xl" onClick={closeModal} />
          <div className="relative w-full max-w-5xl aspect-video bg-[#131316] rounded-3xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(147,51,234,0.2)] animate-in fade-in zoom-in duration-300">
            <button 
              onClick={closeModal}
              className="absolute top-6 right-6 z-10 p-2 bg-black/50 hover:bg-purple-600 rounded-full text-white transition-colors"
            >
              <X size={24} />
            </button>
            {selectedMedia.type === 'video' ? (
              <video 
                src={selectedMedia.mediaUrl} 
                className="w-full h-full object-contain" 
                controls 
                autoPlay
              />
            ) : (
              <img 
                src={selectedMedia.mediaUrl} 
                className="w-full h-full object-contain" 
                alt="Project Detail"
              />
            )}
            <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-black/80 to-transparent">
              <h3 className="text-2xl font-bold text-white mb-2">{selectedMedia.title}</h3>
              <p className="text-slate-300 max-w-2xl">{selectedMedia.description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0a0c]/80 backdrop-blur-md border-b border-purple-500/20 py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-2 group cursor-pointer">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-[0_0_20px_rgba(147,51,234,0.3)] group-hover:scale-110 transition-transform">
              <Terminal className="text-white" size={22} />
            </div>
            <span className="text-xl font-bold tracking-tighter text-white">WAXES</span>
          </div>
          <div className="hidden md:flex items-center gap-8 text-sm font-medium">
            <a href="#about" className="hover:text-purple-400 transition-colors">About Me</a>
            <a href="#work" className="hover:text-purple-400 transition-colors">Past Work</a>
            <a href="#contact" className="px-5 py-2 bg-purple-600/10 border border-purple-500/50 rounded-full hover:bg-purple-600 hover:text-white transition-all">Hire Me</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-40 pb-28 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-purple-600/10 blur-[120px] rounded-full -z-10" />
        
        <div className="max-w-5xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest mb-8 animate-fade-in shadow-[0_0_15px_rgba(147,51,234,0.1)]">
            <Code2 size={14} /> Elite Scripting Services
          </div>
          <h1 className="text-6xl md:text-8xl font-black text-white mb-8 leading-[1.05] tracking-tight">
            Clean Code. <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-indigo-500">Unrivaled Performance.</span>
          </h1>
          <p className="text-lg md:text-2xl text-slate-400 mb-12 max-w-3xl mx-auto leading-relaxed font-medium">
            I can handle pretty much any coding or scripting task on Roblox, with a specialization in combat and anime-style games. Whether it’s building complex systems, optimizing performance, or creating scalable features, I deliver code that works and grows with your game.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button 
              onClick={() => document.getElementById('work')?.scrollIntoView({ behavior: 'smooth' })}
              className="group w-full sm:w-auto px-10 py-5 bg-purple-600 hover:bg-purple-500 text-white font-bold rounded-2xl shadow-[0_15px_40px_rgba(147,51,234,0.4)] transition-all transform hover:-translate-y-1 flex items-center justify-center gap-2"
            >
              See Past Work <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </button>
           <button 
              onClick={copyDiscord}
              className="w-full sm:w-auto px-10 py-5 bg-white/5 hover:bg-white/10 text-white font-bold rounded-2xl border border-white/10 transition-all flex items-center justify-center gap-2 backdrop-blur-sm group"
            >
              <MessageSquare size={20} className="group-hover:text-purple-400" /> Discord: @waxes97
            </button>
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="about" className="py-32 px-6 bg-purple-900/5 border-y border-white/5 relative">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <div className="order-2 lg:order-1">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">About Me</h2>
            <p className="text-slate-400 text-lg mb-10 leading-relaxed">
              Hello, I'm Waxes! I've been scripting on Roblox for 5+ years, so I know my way around code. While I can handle a variety of coding tasks, I specialize in combat and anime-style games. I focus on logic, optimization, and system architecture because I believe a game is only as good as its engine. Currently, I’m accepting commissions for short-term projects and bug fixes!
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {[
                { icon: <Cpu />, title: "Efficiency", desc: "Low-latency networking & memory optimization." },
                { icon: <ShieldCheck />, title: "Security", desc: "Exploit-proof server-side verification." },
                { icon: <Layers />, title: "Scalability", desc: "Modular code built for large-scale updates." },
                { icon: <CheckCircle2 />, title: "Debugging", desc: "Fast bug resolution and error handling." }
              ].map((item, idx) => (
                <div key={idx} className="p-6 rounded-2xl bg-[#131316] border border-white/5 hover:border-purple-500/30 transition-all group">
                  <div className="text-purple-500 mb-4 group-hover:scale-110 transition-transform">{item.icon}</div>
                  <h4 className="font-bold text-white text-lg mb-2">{item.title}</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative order-1 lg:order-2">
            <div className="aspect-square rounded-[3rem] bg-gradient-to-br from-purple-600 to-indigo-900 overflow-hidden relative p-1.5 shadow-[0_0_50px_rgba(147,51,234,0.2)]">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 flex flex-col justify-end p-10">
                 <div className="flex gap-2 mb-4">
                    <span className="px-3 py-1 bg-purple-500 text-[10px] font-black rounded-lg tracking-widest uppercase">LUAU</span>
                    <span className="px-3 py-1 bg-blue-500 text-[10px] font-black rounded-lg tracking-widest uppercase">OOP</span>
                 </div>
                 <h3 className="text-3xl font-bold text-white leading-tight">5+ Years of Professional Scripting</h3>
              </div>
              <img 
                src="https://cdn.discordapp.com/avatars/358532198531465219/a_324974e8464b98d07ad1ddbe4c96883d.gif?size=1024" 
                alt="Programming" 
                className="w-full h-full object-cover rounded-[2.8rem]"
              />
            </div>
            <div className="absolute -top-10 -left-10 bg-[#1a1a1e] p-8 rounded-3xl border border-purple-500/30 shadow-2xl animate-bounce-slow hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse shadow-[0_0_15px_rgba(34,197,94,0.5)]" />
                <span className="text-sm font-black text-white uppercase tracking-[0.2em]">Available Now</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Selected Works */}
      <section id="work" className="py-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-24">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Past Work Showcase</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-purple-600 to-indigo-600 mx-auto rounded-full mb-8" />
            <p className="text-slate-400 text-lg max-w-2xl mx-auto">Click any project to see the code in action via video or detailed image.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {projects.map((project) => (
              <div 
                key={project.id} 
                onClick={() => setSelectedMedia(project)}
                className="group relative bg-[#131316] rounded-[2.5rem] overflow-hidden border border-white/5 hover:border-purple-500/50 transition-all duration-500 cursor-pointer hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]"
              >
                <div className="aspect-video overflow-hidden relative">
                  <img 
                    src={project.thumbnail} 
                    alt={project.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] opacity-60 group-hover:opacity-100"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-20 h-20 bg-purple-600 rounded-full flex items-center justify-center shadow-2xl transform scale-90 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-500 text-white">
                      {project.type === 'video' ? <Play fill="currentColor" size={32} /> : <ExternalLink size={32} />}
                    </div>
                  </div>
                  <div className="absolute top-6 left-6">
                    <span className="px-4 py-1.5 bg-black/60 backdrop-blur-md rounded-xl text-[10px] font-black text-purple-400 uppercase tracking-[0.2em] border border-white/10 shadow-lg">
                      {project.type}
                    </span>
                  </div>
                </div>
                <div className="p-10">
                  <h3 className="text-3xl font-bold text-white mb-4 group-hover:text-purple-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-lg leading-relaxed mb-8">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-3">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-4 py-2 bg-purple-500/5 border border-purple-500/20 rounded-xl text-[10px] text-purple-300 font-black uppercase tracking-widest">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

     {/* CTA Section */}
<section id="contact" className="py-32 px-6 relative overflow-hidden">
  <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[500px] bg-purple-600/10 blur-[150px] rounded-full -z-10" />
  
  <div className="max-w-5xl mx-auto bg-[#131316] rounded-[4rem] p-12 md:p-24 text-center border border-white/5 shadow-2xl relative overflow-hidden">
    <div className="absolute top-0 right-0 w-64 h-64 bg-purple-600/5 blur-3xl -z-10" />
    
    <h2 className="text-5xl md:text-6xl font-black text-white mb-8 tracking-tight">
      Partner with a Specialist,<br/>
      <span className="text-purple-500">Who Delivers Results.</span>
    </h2>
    
    <p className="text-slate-400 text-xl mb-3.5 max-w-2xl mx-auto leading-relaxed">
      Stop dealing with buggy scripts. Get clean, professional, and scalable code that your game deserves.
    </p>
    <p className="text-purple-400 font-semibold text-2xl mb-3.5 max-w-2xl mx-auto leading-relaxed">
    Currently accepting commissions for short-term projects and bug fixes!
    </p>
    <p className="bg-red-100 border border-red-500 text-red-800 font-semibold text-lg mb-7 max-w-2xl mx-auto p-4 rounded-lg flex items-center justify-center gap-2 text-center">
    <span>Payments accepted: <span className="text-red-600">only via <span className="text-green-600">Robux</span> or <span className="text-blue-600">Paypal</span></span></span>
    </p>



    <div className="flex flex-col items-center gap-8">
      {/* Icon Buttons */}
      <div className="flex items-center gap-6">
        <button
  onClick={copyDiscord}
  className="group relative p-6 bg-[#5865F2] text-white rounded-full hover:bg-[#4752C4] transition-all transform hover:scale-110 shadow-xl"
>
  <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/discord-white-icon.png" alt="Discord" className="w-8 h-8"/>
  <span className="absolute -bottom-10 left-1/2 -translate-x-1/2 bg-black/80 text-[10px] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
    Copy @waxes97
  </span>
</button>

        <button
          onClick={() => window.open("https://www.youtube.com/@waxes97", "_blank")}
          className="p-6 bg-red-600 text-white rounded-full hover:bg-red-500 transition-all transform hover:scale-110 shadow-xl"
        >
          {/* Put your YouTube icon here */}
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/youtube-app-white-icon.png" alt="YouTube" className="w-8 h-8"/>
        </button>

        <button
          onClick={() => window.open("https://www.tiktok.com/@waxes97", "_blank")}
          className="p-6 bg-black text-white rounded-full hover:bg-gray-800 transition-all transform hover:scale-110 shadow-xl"
        >
          {/* Put your TikTok icon here */}
          <img src="https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tiktok-simplified-white-icon.png" alt="TikTok" className="w-8 h-8"/>
        </button>
      </div>

      <div className="flex flex-wrap justify-center gap-8 mt-6">
        <div className="flex items-center gap-3 text-xs font-black text-slate-500 uppercase tracking-widest">
          <CheckCircle2 className="text-purple-500" size={18}/> 24h Response Time
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Footer */}
      <footer className="py-16 border-t border-white/5 text-center text-slate-500 text-sm">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-2 grayscale opacity-50">
              <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                <Terminal size={18} />
              </div>
              <span className="text-lg font-bold tracking-tighter text-white">Waxes</span>
            </div>
            <p className="mt-4">© {new Date().getFullYear()} Waxes. All rights reserved.</p>
          </div>
        </div>
      </footer>

      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-15px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 5s ease-in-out infinite;
        }
        .animate-fade-in {
          animation: fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        html {
          scroll-behavior: smooth;
        }
      `}} />
    </div>
  );
};

export default App;