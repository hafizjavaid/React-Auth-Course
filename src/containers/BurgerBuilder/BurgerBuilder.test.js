import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
configure({
    adapter: new Adapter(),
  });
import { BurgerBuilder } from './BurgerBuilder';
// import buildControls
import BuildControls from '../../components/Burger/BuildControls/BuildControls';

describe("<BurgerBuilder />", () => {
   
    let wrapper;
    beforeEach(()=>{
       wrapper = shallow(<BurgerBuilder onInitIngredients={()=> {}} />);
        
    })
    it("Should render two <BuildControls /> elements when recieving ingradients", () => {
      
        wrapper.setProps({
            ings:{
                salad:0
            }
        })
      expect(wrapper.find(BuildControls)).toHaveLength(1);
    });
 
  });
