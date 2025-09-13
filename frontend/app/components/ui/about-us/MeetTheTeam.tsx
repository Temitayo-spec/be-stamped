import DraggableCarousel from '../../shared/DraggableCarousel'

const profiles: Profile[] = [
  {
    id: 1,
    name: 'Ayomide Zel',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop',
  },
  {
    id: 2,
    name: 'Debbie Anderson',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
  },
  {
    id: 3,
    name: 'Guy Williams',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop',
  },
  {
    id: 4,
    name: 'Irene Chinonso',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop',
  },
  {
    id: 5,
    name: 'Silas Reeves',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop',
  },
  {
    id: 6,
    name: 'Emma Johnson',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400&h=400&fit=crop',
  },
  {
    id: 7,
    name: 'Marcus Chen',
    image: 'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=400&h=400&fit=crop',
  },
  {
    id: 8,
    name: 'Sofia Rodriguez',
    image: 'https://images.unsplash.com/photo-1554151228-14d9def656e4?w=400&h=400&fit=crop',
  },
]

const teams = [
  {
    category: 'INVESTMENT TEAM',
    profiles,
  },
  {
    category: 'OPERATIONS TEAM',
    profiles,
  },
  {
    category: 'CREATIVE TEAM',
    profiles,
  },
]

const MeetTheTeam = () => {
  return (
    <section className="space-y-[10rem] pb-[10rem]">
      <header className="flex justify-between w-[90%] max-w-[1280px] mx-auto">
        <h2 className="inline-flex flex-col font-playfair italic text-[4rem] leading-[120%] font-semibold">
          <span>Meet the Team –</span> <span>The Stamped Ones</span>
        </h2>
        <p className="inline-flex flex-col max-w-[27.8125rem] text-xl font-medium leading-[160%] justify-self-end self-end">
          <span>We're thinkers, makers, dreamers, and digital</span>
          <span>explorers. We call ourselves Stampers, because</span>
          <span>everything we do leaves an impression.</span>
        </p>
      </header>

      <div className="flex flex-col gap-[16rem]">
        {teams.map((team, i) => (
          <div key={i} className="flex flex-col gap-[12.5rem]">
            <div className="w-[90%] max-w-[1280px] mx-auto inline-flex items-start">
              <div className="py-1 px-4 flex items-center justify-center rounded-2xl border-[1.2px] border-white uppercase text-xl font-bold leading-[140%]">
                {team.category}
              </div>
            </div>

            <DraggableCarousel profiles={team.profiles} />
          </div>
        ))}
      </div>
    </section>
  )
}

export default MeetTheTeam
