import * as React from 'react';
import './FiltersGroup.css'

interface IProps {
  title: string
  filtersList: FilterValue[]
  filterChanged: (value: FilterValue) => void,
  initialFilterValue: FilterValue
}

interface IState {
  activeValue: FilterValue
}

export class FiltersGroup extends React.Component<IProps> {

  public static defaultProps: Partial<IProps> = {
    title: '',
    filtersList: [],
    filterChanged: (): void => {},
    initialFilterValue: 'any'
  }

  public state: IState = {
    activeValue: this.props.initialFilterValue
  }

  public componentDidUpdate(prevProps: IProps) {
    if (prevProps.initialFilterValue !== this.state.activeValue) {
      this.setState({ activeValue: this.props.initialFilterValue })
    }
  }

  public getClassName(filterValue: FilterValue): string {
    return this.state.activeValue === filterValue ? 'active' : ''
  }


  public onFilterValueClick = (value: FilterValue) => {
    this.props.filterChanged(value)
    this.setState({ activeValue: value })
  }

  public render() {
    const filterElements = this.props.filtersList.map((filter: FilterValue) => {
      return <li
        key={ filter }
        className={ this.getClassName(filter) }
        onClick={ () => this.onFilterValueClick(filter) }
      >{ filter }</li>
    })

    return (
      <div className="filters-group">
        <div className="filter-group-title">{ this.props.title }</div>
        <ul>
          { filterElements }
        </ul>
      </div>
    );
  }

}
