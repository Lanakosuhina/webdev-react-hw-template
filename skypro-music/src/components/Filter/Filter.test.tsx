import renderer from "react-test-renderer";
import { Filter } from ".";

describe('Компонент фильтра', () => {
  const mockToggleSelected = jest.fn();
  const mockOnClick = jest.fn();

  it('корректно отрисовывает разметку с начальными значениями isOpen = true', () => {
    const component = renderer.create(<Filter
      list={['item 1', 'item 2']}
      title={"жанру"}
      isOpen={true}
      toggleSelected={mockToggleSelected}
      onClick={mockOnClick}
      counter={0}
    />).toJSON();
    expect(component).toMatchSnapshot();
  });

  it('корректно срабатывает обработчик клика', () => {
    const component = renderer.create(<Filter
      list={[]}
      title={"жанру"}
      isOpen={true}
      toggleSelected={mockToggleSelected}
      onClick={mockOnClick}
      counter={0}
    />);

    let button = component.root.findByType("button");
    button.props.onClick();
    expect(mockOnClick).toHaveBeenCalled();
  });
});
