import DataImage from './data';
import {listTools, listProyek} from './data';


function App() {

  return (
    <>
      <div className="hero grid md:grid-cols-2 items-center pt-5 xl:gap-0 gap-6 grid-cols-1">
        <div className="animate__animated animate__fadeInUp animate__delay-1s">
          <h1 className="text-5xl/tight font-bold mb-10">Hi, Saya Wahyu Lukytaningtyas</h1>
          <p className="text-base/loose mb-6 opacity-50">
            Saya adalah mahasiswa Informatika yang memiliki ketertarikan pada bidang Programming
            dan Design, dengan fokus pada pengembangan aplikasi dan website serta desain antarmuka
            untuk web, aplikasi, dan konten Instagram. Selama masa perkuliahan, saya terlibat dalam
            berbagai proyek akademik yang melatih kemampuan saya dalam merancang dan mengimplementasikan solusi digital.
          </p>
          <div className="flex items-center sm:gap-4 gap-2">
            <a href="https://drive.google.com/file/d/1kcPwMOb0xOdy2ZzNR_mSqCVLAOQMxS6V/view?usp=sharing" className="bg-emerald-700 p-4 rounded-2xl hover:bg-emerald-600"><i className="ri-download-2-line ri-lg"></i> Download CV</a>
            <a href="#proyek" className="bg-zinc-700 p-4 rounded-2xl hover:bg-zinc-600"><i className="ri-arrow-down-box-line ri-lg"></i> Lihat Proyek</a>
          </div>
        </div>
        <img src={DataImage.HeroImage} alt="Hero Image" className="w-125 md:ml-auto animate__animated animate__fadeInUp animate__delay-4s" />
      </div>

      {/* About */}
      <div className="tentang mt-32 py-10" id="tentang">
        <div className="xl:w-2/3 lg:w-3/4 w-full mx-auto p-7 bg-zinc-800 rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">
        <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md mb-10 sm:hidden" loading="lazy"/>
          <p className="text-base/loose mb-10">
            Hi, perkenalkan saya Wahyu Lukytaningtyas, mahasiswa Informatika dengan minat pada pengembangan aplikasi dan website serta desain antarmuka pengguna. Berdasarkan pengalaman saya selama perkuliahan dan magang sebagai Full Stack Web Developer, saya memahami bahwa keseimbangan antara desain dan fungsi merupakan faktor penting dalam menciptakan sistem yang efektif.
          </p>
          <div className="flex items-center justify-between">
            <img src={DataImage.HeroImage} alt="Image" className="w-12 rounded-md sm:block hidden" loading="lazy" />
            <div className="text-center flex gap-6">
              <div>
                <h1 className="text-4xl mb-1">5<span className="text-emerald-500">+</span></h1>
                <p>Proyek Selesai</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">1<span className="text-emerald-500">+</span></h1>
                <p>Magang</p>
              </div>
              <div>
                <h1 className="text-4xl mb-1">2<span className="text-emerald-500">+</span></h1>
                <p>Organisasi</p>
              </div>
            </div>
          </div>
        </div>

        <div className="tools mt-32">
          <h1 className="text-4xl/snug font-bold mb-4" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Tools yang dipakai</h1>
          <p className="xl:w-2/5 lg:w-2/4 md:w-2/3 sm:w3/4 w-full text-base/loose opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut ini beberapa tools yang biasa saya pakai untuk pembuatan Website, Mobile ataupun Design</p>
          <div className="tools-box mt-14 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
            {listTools.map(tool => (
              <div className="flex items-center gap-2 p-3 border border-zinc-600 rounded-md hover:bg-zinc-800 group" key={tool.id} data-aos="fade-up" data-aos-duration="1000" data-aos-delay={tool.dad} data-aos-once="true">
              <img src={tool.gambar} alt="Tools Image" className="w-14 bg-zinc-800 p-1 group-hover:bg-zinc-900" loading="lazy"/>
              <div>
                <h4 className="font-bold">{tool.nama}</h4>
                <p className="opacity-50">{tool.ket}</p>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>

      {/* Proyek */}
      <div className="proyek mt-32 py-10" id="proyek">
        <h1 className="text-center text-4xl font-bold mb-2" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Proyek</h1>
        <p className="text-base/loose text-center opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Berikut ini beberapa proyek terbaru yang telah saya buat.</p>
        <div className="proyek-box mt-14 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
          {listProyek.map(proyek => (
            <div key={proyek.id} className="p-4 bg-zinc-800 rounded-md" data-aos="fade-up" data-aos-duration="1000" data-aos-delay={proyek.dad} data-aos-once="true">
              <img src={proyek.gambar} alt="Proyek Image" loading="lazy" />
              <div>
                <h1 className="text-2xl font-bold my-4">{proyek.nama}</h1>
                <p className="text-base/loose mb-4">{proyek.desk}</p>
                <div className="flex flex-wrap gap-2">
                  {proyek.tools.map((tool, index) => (
                    <p className="py-1 px-3 border border-zinc-500 bg-zinc-600 rounded-md font-semibold" key={index}>{tool}</p>
                  ))}
                </div>
                <div className="mt-8 text-center">
                  <a href="#" className="bg-emerald-700 p-3 rounded-lg block border border-zinc-600 hover:bg-emerald-600">Lihat di proyek</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Kontak */}
      <div className="kontak mt-32 sm:p-10 p-0" id="kontak">
        <h1 className="text-4xl mb-2 font-bold text-center" data-aos="fade-up" data-aos-duration="1000" data-aos-once="true">Kontak</h1>
        <p className="text-base/loose text-center mb-10 opacity-50" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="300" data-aos-once="true">Mari terhubung dengan saya.</p>
        <form action="https://formsubmit.co/wahyulukytaningtyas@gmail.com" method="POST" className="bg-zinc-800 p-10 sm:w-fit w-full mx-auto rounded-md" autoComplete="off" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500" data-aos-once="true">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-semibold">Nama Lengkap</label>
              <input type="text" name="nama" placeholder="Masukkan Nama" className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" >Email</label>
              <input type="email" name="email" placeholder="Masukkan Email" className="border border-zinc-500 p-2 rounded-md" required />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-semibold" htmlFor="pesan">Pesan</label>
              <textarea name="pesan" id="pesan" cols="45" rows="7" placeholder="Pesan" className="border border-zinc-500 p-2 rounded-md" required></textarea>
            </div>
            <div className="text-center">
              <button type="submit" className="bg-emerald-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-emerald-600" >Kirim Pesan</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
