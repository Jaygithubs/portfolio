import React from 'react'

const hero = () => {
  return (
    <div className='min-h-screen' id='home'>
      <div className="text-center space-y-10 py-10">
            <div className="text-7xl"><span className="font-bold">Crafted</span> <span className="italic">Websites</span></div>
            <div className="text-7xl">Lasting Impressions</div>
            <div className='text-2xl'>Premium websites crafted for bold brands.</div>
            <div className="space-x-3">
                <button>Get in touch</button>
                <button>See our work</button>
            </div>
      </div>
    </div>
  )
}

export default hero
