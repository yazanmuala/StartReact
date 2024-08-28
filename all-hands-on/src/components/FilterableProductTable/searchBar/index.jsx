import { Input, CheckboxWrapper, Label, SearchBarWrapper } from './style';

export default function SearchBar(params) {
  return (
    <SearchBarWrapper>
      <Input placeholder="Search..."></Input>
      <CheckboxWrapper>
        <Input type="checkbox"></Input>
        <Label>Only show products on stock</Label>
      </CheckboxWrapper>
    </SearchBarWrapper>
  );
}
