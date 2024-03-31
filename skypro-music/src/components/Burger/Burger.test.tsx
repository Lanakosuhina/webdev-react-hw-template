import renderer from "react-test-renderer";
import { Burger } from ".";

describe('Компонент бургер-меню', () => {
  const mockOnClick = jest.fn();

  it('корректно рендериться', () => {
    const component = renderer.create(<Burger
      onClick={mockOnClick}
    />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('корректно вызывает функцию принажатии', () => {
    const component = renderer.create(<Burger
      onClick={mockOnClick}
    />)

    let button = component.root.findByType("button"); 
    button.props.onClick();
    expect(mockOnClick).toHaveBeenCalled();
  });
});