import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import debounce from 'lodash.debounce';
import { Download, Edit, Filter } from '@carbon/icons-react';

import { AddButton, Input, SearchIcon, SearchTool, ToolbarButton } from './toolbar.styles';

/*
 * SearchToolbar
 * Description: SearchToolbar is a component that provides a search input, filter, edit, and download buttons.
 * It is used by the BasicTable and ControlledTable components.
 *
 * Props:
 *  searchTerm: string that is the current value of the search input. (not passed to BasicTqble.  required by ControlledTable. )
 *  setSearchTerm: function that sets the searchTerm state in the parent component. (not passed to BasicTable. required by ControlledTable.)
 *  placeholder: string that is the placeholder text for the search input.
 *  Optional Props.  If not passed, the prop is not displayed.
 *     buttonProps object.  Normally contains props for an 'add' button that is used to add a new record to the table.
 *       buttonProps.buttonContent: string that is the content of the button.
 *       buttonProps.buttonIcon: Icon that is the icon of the button. Normally a @carbon/icons-react icon.
 *       buttonProps.onButtonClick: function that is executed when the button is clicked.
 *     filterProps: object that contains the props to open/close the filter panel.
 *       filterProps.openFilters: boolean that is the state of the filter button.
 *       filterProps.setOpenFilters: function that sets the openFilters state in the parent component (ie opening/closing the filter panel)
 *     editProps object: Nomally used to delete a record from the table.  The action is defined my adding the button-column.js - createDeleteColumn to the table columns object.
 *       editProps.showEdit: boolean that is the state of the edit button. If true, the trash can is displayed in the table.
 *       editProps.setShowEdit: function that sets the showEdit state in the parent component.
 *     downloadProps: object that contains the props for the download button.
 *       downloadProps.onDownload: function executed when the download button is clicked. Normally would send the table data to the server for download.
 */

const Toolbar = ({ searchTerm, setSearchTerm, placeholder, buttonProps, filterProps, editProps, downloadProps }) => {
  const [value, setValue] = useState(searchTerm);

  useEffect(() => {
    const delay = 600;

    const debounceOnChange = debounce((value) => {
      setSearchTerm?.(value || undefined);
    }, delay);
    debounceOnChange(value);

    return debounceOnChange.cancel;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value]);

  return (
    <>
      <SearchTool className='searchTool'>
        {setSearchTerm && (
          <>
            <SearchIcon className='searchIcon' />
            <Input
              value={value}
              type='search'
              aria-label='search table for value'
              className='searchInput'
              onChange={(event) => setValue(event.target.value)}
              placeholder={placeholder ?? 'Enter your search term.'}
            />
          </>
        )}
      </SearchTool>
      {filterProps && (
        <ToolbarButton
          kind='icon'
          aria-label='toggle filters'
          open={filterProps?.openFilters}
          onClick={() => {
            filterProps?.setOpenFilters((state) => !state);
          }}
        >
          <Filter />
        </ToolbarButton>
      )}
      {editProps && (
        <ToolbarButton
          kind='icon'
          aria-label='toggle edit'
          disabled={editProps?.disableEdit}
          open={editProps?.showEdit}
          onClick={() => editProps?.setShowEdit((state) => !state)}
        >
          <Edit />
        </ToolbarButton>
      )}
      {downloadProps && (
        <ToolbarButton kind='icon' aria-label='download table content' onClick={downloadProps?.onDownload}>
          <Download />
        </ToolbarButton>
      )}
      {buttonProps && (
        <AddButton
          kind='primary'
          aria-label={`add ${buttonProps?.buttonContent}`}
          rightIcon={buttonProps.buttonIcon}
          onClick={buttonProps?.onButtonClick}
        >
          {buttonProps?.buttonContent}
        </AddButton>
      )}
    </>
  );
};

Toolbar.propTypes = {
  placeholder: PropTypes.string,
  searchTerm: PropTypes.string,
  setSearchTerm: PropTypes.func,
  buttonProps: PropTypes.shape({
    buttonContent: PropTypes.string,
    buttonIcon: PropTypes.element,
    onButtonClick: PropTypes.func,
  }),
  filterProps: PropTypes.shape({
    openFilters: PropTypes.bool,
    setOpenFilters: PropTypes.func,
  }),
  editProps: PropTypes.shape({
    disableEdit: PropTypes.bool,
    showEdit: PropTypes.bool,
    setShowEdit: PropTypes.func,
  }),
  downloadProps: PropTypes.shape({
    onDownload: PropTypes.func,
  }),
};

Toolbar.defaultProps = {
  placeholder: 'Enter your search term.',
  searchTerm: undefined,
  setSearchTerm: undefined,
  buttonProps: undefined,
  filterProps: undefined,
  editProps: undefined,
  downloadProps: undefined,
};

export default Toolbar;
