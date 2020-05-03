import * as React from 'react';
import './FiltersGroup.css'
import { FilterValue } from '../filters/Filters';

interface IProps {
  title: string
  filtersList: FilterValue[]
  activeValue: FilterValue,
  filterChanged: (value: FilterValue) => void
}

export class FiltersGroup extends React.Component<IProps> {

  public static defaultProps: Partial<IProps> = {
    title: '',
    filtersList: [],
    activeValue: 'any',
    filterChanged: (): void => {}
  }

  public onFilterValueClick = (value: FilterValue) => {
    this.props.filterChanged(value)
  }

  public render() {
    const filterElements = this.props.filtersList.map((filter: FilterValue) => {
      return <li
        key={ filter }
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
