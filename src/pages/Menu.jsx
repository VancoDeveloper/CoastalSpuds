import { useState } from 'react'
import './Menu.css'

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const menuItems = [
    { id: 1, name: 'Loaded Nachos', category: 'appetizers', price: 8, description: 'Crispy chips with sour cream, cheese & jalapeños' },
    { id: 2, name: 'Spud Skewers', category: 'appetizers', price: 7, description: 'Grilled potato cubes with herb seasoning' },
    { id: 3, name: 'Cheesy Fries', category: 'appetizers', price: 7, description: 'Golden fries smothered in melted cheese' },
    
    { id: 4, name: 'Classic Spud Burger', category: 'mains', price: 12, description: 'Gourmet potato patty with lettuce, tomato & special sauce' },
    { id: 5, name: 'Loaded Baked Potato', category: 'mains', price: 11, description: 'Large baked potato with bacon, cheese & sour cream' },
    { id: 6, name: 'Spicy Spud Wrap', category: 'mains', price: 10, description: 'Tortilla wrap with spiced potato filling & fresh toppings' },
    { id: 7, name: 'Truffle Mash Bowl', category: 'mains', price: 13, description: 'Creamy mashed potatoes with truffle oil & parmesan' },
    
    { id: 8, name: 'Seasoned Fries', category: 'sides', price: 6, description: 'Golden fries with special spice blend' },
    { id: 9, name: 'Sweet Potato Fries', category: 'sides', price: 7, description: 'Crispy sweet potato fries with aioli' },
    { id: 10, name: 'Mashed Potatoes', category: 'sides', price: 5, description: 'Creamy, buttery mashed potatoes' },
    { id: 11, name: 'Spud Salad', category: 'sides', price: 8, description: 'Fresh salad with warm potato chunks' },
    
    { id: 12, name: 'Spud Smoothie', category: 'drinks', price: 5, description: 'Unique blend - trust us! (Banana & vanilla)' },
    { id: 13, name: 'Iced Tea', category: 'drinks', price: 3, description: 'Fresh brewed iced tea' },
    { id: 14, name: 'Lemonade', category: 'drinks', price: 4, description: 'Fresh squeezed lemonade' },
  ]

  const categories = [
    { id: 'all', name: 'All Items' },
    { id: 'appetizers', name: 'Appetizers' },
    { id: 'mains', name: 'Mains' },
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
        <p>Discover our delicious selection of gourmet potato dishes</p>
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
              <div className="card-header">
                <h3>{item.name}</h3>
                <span className="card-price">${item.price}</span>
              </div>
              <p className="card-description">{item.description}</p>
              <button className="btn btn-secondary" style={{ width: '100%' }}>
                Add to Event
              </button>
            </div>
          ))}
        </div>

        <div className="menu-note">
          <p>💡 <strong>Tip:</strong> All items can be customized for your event. Mix and match to create your perfect menu!</p>
        </div>
      </div>
    </main>
  )
}