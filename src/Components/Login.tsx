import React, { useCallback, useState, type ChangeEvent, type FormEvent } from "react";

interface LoginProps {
    email?: string;  
    password?: string;
}

const LoginForm: React.FC<LoginProps> = () => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);


  const handleSubmit = (e: FormEvent) => {
      e.preventDefault();
      setError(null);
      setLoading(true);      
    };

  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string>>) =>{
    setter(e.target.value);
  }, []);


  return (
   <>
    <div className='flex flex-col items-center justify-center bg-gray-100 min-h-screen p-7'>
        <div className='w-full max-w-sm p-8 bg-white rounded-xl shadow-2xl'>
            <h2 className='text-2xl font-bold mb-6 text-center text-cyan-700  border-b-cyan-700 border-b-2 pb-2'>Inco Print <br /> <p className="text-sm">Prijava Na Sistem</p></h2>

            {error && (
              <div className="bg-red-100 border-l-4 border-red-700 text-red-700 p-4 mb-6">
                <p className="font-bold">Greska</p>
                <p>{error}</p>
              </div>
            )}

        <form onSubmit={handleSubmit}>
          <div className="mb-4 ">
            <label className="block text-cyan-700 text-sm font-semibold mb-2" htmlFor="email">Email Adresa</label>
            <input 
              id="email"
              type="email" 
              placeholder="Unesite vašu email adresu"
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-700 focus:text-center"
              value={email}
              onChange={(e) => handleInputChange(e, setEmail)}
              required  
              disabled={loading}
            />
          </div>
          <div className="mb-7">
            <label className="block text-cyan-700 text-sm font-semibold mb-2" htmlFor="password">Passworsd</label>
            <input
              id="password"
              type="password" 
              placeholder="Unesite vašu lozinku" 
              className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-700"
              value={password}
              onChange={(e) => handleInputChange(e, setPassword)}
              required  
              disabled={loading}
            />
          </div>
          <button
            type="submit"
            className={`w-full bg-cyan-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-cyan-800 transition-colors duration-200 ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            disabled={loading}
          >
            {loading ? "Učitavanje..." : "Prijavi Se"}
          </button>
        </form>
        </div>
    </div>
   </>
  )
}

export default LoginForm;
