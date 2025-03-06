function Sidebar() {
  return (
    <div className="flex flex-col box-border w-1/6 m-8 p-6 border-2 border-gray-700 rounded-md bg-stone-100">
      <a className="mb-4" href="/npc">
        NPC Database
      </a>
      <a className="mb-4" href="/npc/npc-generator">
        NPC Generator
      </a>
    </div>
  );
}

export default Sidebar;
