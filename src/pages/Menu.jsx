import { useState } from 'react'
import './Menu.css'

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const BASE = import.meta.env.BASE_URL
  const menuItems = [
    { id: 1, name: 'Cheesy Fries', category: 'fries', description: 'Golden fries loaded with melted cheese and toppings', image: `${BASE}Images/Cheesyfries.jpg` },
    { id: 2, name: 'Waffle Fries', category: 'fries', description: 'Crispy waffle-cut fries with seasoning', image: `${BASE}Images/WaffleFries.jpg` },
    { id: 3, name: 'Fries', category: 'fries', description: 'Classic golden fries with our special seasoning', image: `${BASE}Images/Fries.jpg` },
    { id: 4, name: 'Chips & Tenders', category: 'main', description: 'Crispy chicken tenders with golden fries', image: `${BASE}Images/ChipsandTenders.jpg` },
    { id: 5, name: 'Chips on a Stick', category: 'main', description: 'Delicious spiral-cut potato chips on a stick', image: `${BASE}Images/Chipsonastick.jpg` },
    { id: 6, name: 'Corn in a Cup', category: 'sides', description: 'Fresh buttered corn kernels in a cup', image: `${BASE}Images/Corn.jpg` },
    { id: 7, name: 'Roasted Corn', category: 'sides', description: 'Smoky flame-roasted corn on the cob with seasoning', image: `${BASE}Images/RoastedCorn.jpg` },
    { id: 8, name: 'Skewers', category: 'main', description: 'Grilled skewers packed with flavour', image: `${BASE}Images/Skewers.jpg` },
    { id: 9, name: 'Drinks', category: 'drinks', description: 'Refreshing cold drinks to complement your meal', image: `${BASE}Images/Drinks.jpg` },
  ]

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'fries', name: 'Fries' },
    { id: 'main', name: 'Main' },
    { id: 'sides', name: 'Sides' },
    { id: 'drinks', name: 'Drinks' },
  ]

  const filteredItems = selectedCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === selectedCategory)

  return (
    <main className="menu-page">
      <div className="menu-header">
        <h1>Our Menu</h1>
        <p>Fresh, delicious food truck favorites</p>
      </div>

      <div className="container">
        {/* Category Filter */}
        <div className="category-filter">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="menu-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="menu-card">
              <div className="card-image">
                <img src={item.image} alt={item.name} />
              </div>
              <div className="card-content">
                <h3>{item.name}</h3>
                <p className="card-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="menu-note">
          <p>💡 <strong>All items available for events!</strong> Contact us to order or customize your menu.</p>
        </div>
      </div>
    </main>
  )
}