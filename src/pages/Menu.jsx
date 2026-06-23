import { useState } from 'react'
import './Menu.css'

export default function Menu() {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const BASE = import.meta.env.BASE_URL

  const menuItems = [
    { id: 1, name: 'Cheesy Fries',    category: 'fries',  description: 'Our signature golden fries piled high with a rich melted cheese blend, topped with spring onions, crispy bacon bits, and served with your choice of dipping sauce. A fan favourite at every event.',           image: `${BASE}Images/Cheesyfries.jpg` },
    { id: 2, name: 'Waffle Fries',    category: 'fries',  description: 'Thick-cut waffle-patterned fries with a satisfying crunch on the outside and a soft, fluffy centre. Seasoned with our house blend of spices and perfect for dipping or loading with your favourite toppings.',                        image: `${BASE}Images/WaffleFries.jpg` },
    { id: 3, name: 'Fries',           category: 'fries',  description: 'Classic thin-cut fries cooked to golden perfection and generously seasoned with our signature spice blend. Simple, timeless, and impossible to resist. The kind of fries that disappear in minutes at any event.',               image: `${BASE}Images/Fries.jpg` },
    { id: 4, name: 'Chips & Tenders', category: 'main',   description: 'Tender chicken strips hand-crumbed to a perfectly golden crisp, paired with a hearty serving of our seasoned fries. A satisfying, filling combination that is loved by guests of all ages at weddings, corporate events, and beyond.',                      image: `${BASE}Images/ChipsandTenders.jpg` },
    { id: 5, name: 'Chips on a Stick',category: 'main',   description: 'A showstopping crowd favourite. Whole potatoes spiral-cut and skewered on a stick, then fried to a glorious golden crisp. Seasoned your way and perfect for walking around at festivals, markets, and outdoor events.',                  image: `${BASE}Images/Chipsonastick.jpg` },
    { id: 6, name: 'Corn in a Cup',   category: 'main',   description: 'Sweet, tender corn kernels freshly cut from the cob, tossed in rich butter and seasoned to your preference. Served in a convenient cup, this handheld favourite is a hit with guests young and old alike.',                          image: `${BASE}Images/Corn.jpg` },
    { id: 7, name: 'Roasted Corn',    category: 'main',   description: 'Whole corn cobs slow-roasted over an open flame until perfectly charred and smoky, then finished with your choice of butter, chilli lime, or chicken salt. A bold, flavour-packed street-food experience that guests absolutely love.',            image: `${BASE}Images/RoastedCorn.jpg` },
    { id: 8, name: 'Skewers',         category: 'main',   description: 'Juicy cuts of meat and vegetables marinated overnight in our house blend of herbs, spices, and aromatics, then flame-grilled to smoky perfection. Served hot off the grill, these skewers are a guaranteed highlight of any event.',                           image: `${BASE}Images/Skewers.jpg` },
    { id: 9, name: 'Drinks',          category: 'drinks', description: 'A refreshing range of chilled beverages to perfectly complement your meal. From classic soft drinks to cold water, we keep your guests cool, hydrated, and happy throughout the entire event.',                image: `${BASE}Images/Drinks.jpg` },
  ]

  const categories = [
    { id: 'all',    name: 'All Items' },
    { id: 'fries',  name: 'Fries'     },
    { id: 'main',   name: 'Mains'     },
    { id: 'drinks', name: 'Drinks'    },
  ]

  const categoryInfo = {
    fries:  { name: 'Fries'  },
    main:   { name: 'Mains'  },
    drinks: { name: 'Drinks' },
  }

  const filteredItems = selectedCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory)

  return (
    <main className="menu-page">
      <div className="menu-header">
        <h1>Our Menu</h1>
        <div className="menu-header-divider"></div>
        <p>Every dish is freshly prepared on-site using quality ingredients, from our golden crispy fries to our flame-grilled skewers. Browse our full selection below and get in touch to customise your menu for any occasion.</p>
      </div>

      <div className="container">
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

        <div className="menu-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="menu-card">
              <div className="card-image">
                <img src={item.image} alt={item.name} />
                {categoryInfo[item.category] && (
                  <span className="card-badge">
                    {categoryInfo[item.category].name}
                  </span>
                )}
              </div>
              <div className="card-content">
                <h3>{item.name}</h3>
                <p className="card-description">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="menu-note">
          <h3>Available for All Events!</h3>
          <p>Our full menu is available for weddings, corporate functions, birthday parties, festivals, and any private occasion. Every item can be customised to suit dietary requirements and guest numbers. Get in touch today and let us build the perfect menu for your event.</p>
        </div>
      </div>
    </main>
  )
}
