export default function Contact() {
  return (
    <div className="min-h-screen bg-black px-6 py-20 flex justify-center">
      <div className="w-full max-w-xl">
        <h1 className="font-serif text-4xl text-white mb-16 text-center">Contact</h1>
        
        <form className="space-y-10">
          <div className="group">
            <label className="text-gold text-[10px] uppercase tracking-widest mb-2 block">Email</label>
            <input type="text" className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-gold transition-colors"/>
          </div>
          
          <div className="group">
            <label className="text-gold text-[10px] uppercase tracking-widest mb-2 block">Message</label>
            <textarea rows={5} className="w-full bg-transparent border-b border-white/20 py-3 text-white focus:outline-none focus:border-gold transition-colors"></textarea>
          </div>
          
          <button className="w-full bg-white text-black py-4 uppercase tracking-widest text-xs font-bold hover:bg-gold hover:text-black transition-all mt-8">
            Envoyer le message
          </button>
        </form>

        <div className="mt-20 text-center space-y-2">
            <p className="text-gray-500 text-[10px] uppercase tracking-widest">lesfilmsdanssatete@gmail.com</p>
            <p className="text-gray-500 text-[10px] uppercase tracking-widest">Paris, France</p>
        </div>
      </div>
    </div>
  );
}