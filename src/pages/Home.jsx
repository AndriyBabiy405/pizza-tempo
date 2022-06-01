import React from 'react'
import { SortPopup, Categories, PizzaBlock, PizzaLoadingBlock } from '../components';
import { useSelector, useDispatch } from "react-redux";
import { fetchPizzas } from "../redux/actions/pizzas";
import { addPizzaToCart } from "../redux/actions/cart";
import { setCategory, setSortBy } from '../redux/actions/filters';

const categoryList = [
  "М'ясні",
  "Вегетаріанська",
  "Гриль",
  "Гострі",
  "Закриті",
];

const sortItems = [
  { name: "популярності", type: "popular", order: 'desc' },
  { name: "ціні", type: "price", order: 'desc'},
  { name: "алфавіту", type: "alphabet", order: 'asc' } ];

function Home() {
  const dispatch = useDispatch();
  const items = useSelector(({ pizzas }) => pizzas.items);
  const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
  const totalCart = useSelector(({ cart }) => cart.items);
  const { category , sortBy } = useSelector(({ filters }) => filters);

  React.useEffect(() => {
    dispatch(fetchPizzas(category, sortBy));
  }, [category, sortBy])

  const onSelectCategory = React.useCallback((index) => {
    dispatch(setCategory(index));
  }, []);

  const onSelectSortType = React.useCallback((type) => {
    dispatch(setSortBy(type));
  })

  const handleAddPizzaToCart = obj => {
    dispatch(addPizzaToCart(obj));
  }

    return (
        <div>
            <div className="container">
          <div className="content__top"> 
            <Categories activeCategory={category} onClickCategory={onSelectCategory} 
            items={categoryList}/>
              <SortPopup onClickSortType={onSelectSortType} activeSortType={sortBy.type} items={sortItems} />
          </div>
          <h2 className="content__title">Все пиццы</h2>
          <div className="content__items">
            {isLoaded ?
              items.map(obj => (
                <PizzaBlock cartCount={totalCart[obj.id] && totalCart[obj.id].items.length} onClickAddPizza={handleAddPizzaToCart} key={obj.id} {...obj} isLoaing={true} />
              ) ): Array(10).fill(<PizzaLoadingBlock />)
            }
          </div>
        </div>
        </div>
    )
}

export default Home;
