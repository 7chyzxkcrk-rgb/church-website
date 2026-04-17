export default function QuickMenu() {
  const menus = [
    { icon: '📖', label: '교회주보' },
    { icon: '🎬', label: '교회행사앨범' },
    { icon: '🚌', label: '차량안내' },
    { icon: '📍', label: '오시는길' },
  ]

  return (
    <div className="grid grid-cols-4 border-t border-gray-200">
      {menus.map(menu => (
        <div key={menu.label} className="flex flex-col items-center py-8 cursor-pointer hover:bg-gray-50 transition-colors border-r border-gray-200 last:border-r-0">
          <span className="text-3xl mb-2">{menu.icon}</span>
          <span className="text-sm font-medium text-gray-700">{menu.label}</span>
        </div>
      ))}
    </div>
  )
}
