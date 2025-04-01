import React from 'react'
import Marquee from './Marquee'

const Marquees = () => {

                const data=['https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b8724afca0a36e7e8d_633c148cf63c4467416f9bea_61ee848c05ba9c9caff5fd64_yahoo.svg',
                    'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b850995827afaa8db4_633c148b9b819badd7bbcde8_627a8d3e69e23713762e6b34_Vector.svg',
                    'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359ba3497cf06ff9e8f71_633c14899b819b7aafbbcde1_627a8da607be73fd13e76134_basf.svg',
                    'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359ba3497cf06ff9e8f71_633c14899b819b7aafbbcde1_627a8da607be73fd13e76134_basf.svg',
                    'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b9b2d3d56a1d071ef8_633c148a12c2cf0d8c755473_61957d908c68e7c692fe642e_haufe.svg', 
                    'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359bafc1c77261cbab22d_633c148a8b25dcfcd2e387b2_61957e512832dbf5efe8cdc6_mural.svg',
                    'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b97202d2e093f2a48876a_goologo-onLight.svg',
                    'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d8e7a169e0b41018de63_Intesneye-logo-black.svg',
                    'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b842910de1189f26accda_jologo-onLight.svg',
                    'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b89a37dd20bc1a6b9c8da_deelogo-onLight.svg',
                    'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/679b7bf9533879784a0cf5fa_logo-onLight.svg', 
                    'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d485bb37c8fc880cdfad_bcgp-1.svg',
                    'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6697d300a4cce143f24735d3_sevdesk-black.svg',
                    'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/6694f0ff430a1585cff47451_botify-black.svg',
                    'https://cdn.prod.website-files.com/664dc8b6bc52b504509197f0/666359b62de955b9aa4d2ddb_64868958b0d3ba04534cc3b3_Silvr_logo_black.png',
                   ]





                    
  return (
    <div className='mt-5 w-auto py-5 flex items-center gap-10 justify-between bg-white overflow-x-hidden'>
      {data.map((item,index)=><Marquee key={index} image={item}/>)}
      {data.map((item,index)=><Marquee key={index} image={item}/>)}
    </div>
  )
}

export default Marquees


