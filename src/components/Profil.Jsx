import { useState } from 'react';

function Profil() {
  const [nama, setNama] = useState(localStorage.getItem('nama') || '');
  const [foto, setFoto] = useState(localStorage.getItem('foto') || '');

  const simpanProfil = () => {
    localStorage.setItem('nama', nama);
    localStorage.setItem('foto', foto);
  };

  return (
    <div>
      <input 
        type="text" 
        value={nama} 
        onChange={(e) => setNama(e.target.value)} 
        placeholder="Nama"
      />
      <input 
        type="file" 
        accept="image/*" 
        onChange={(e) => setFoto(URL.createObjectURL(e.target.files[0]))} 
      />
      <img src={foto} alt="Profil" width="100" />
      <button onClick={simpanProfil}>Simpan</button>
    </div>
  );
}
