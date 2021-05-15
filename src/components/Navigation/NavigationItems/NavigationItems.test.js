import React from "react";
import Adapter from "enzyme-adapter-react-16";
import { configure, shallow } from "enzyme";
configure({
    adapter: new Adapter(),
  });
// import navigationItem
import NavigationItems from "./NavigationItems";
// import navigationItem
import NavigationItem from "./NavigationItem/NavigationItem";

describe("<NavigationItems />", () => {
  let wrapper;
  beforeEach(()=>{
     wrapper = shallow(<NavigationItems />);
      
  })
  it("Should render two <NavigationItems /> elements if not authenticated", () => {
    
    expect(wrapper.find(NavigationItem)).toHaveLength(2);
  });
  it("Should render three <NavigationItems /> elements if authenticated", () => {
    // wrapper = shallow(<NavigationItems  isAuthenticated />);
    wrapper.setProps({
        isAuthenticated: true
    })
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });
  it("Should render three <NavigationItems /> elements if authenticated", () => {
    wrapper.setProps({
        isAuthenticated: true
    })
    expect(wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)).toEqual(true);
  });
});
