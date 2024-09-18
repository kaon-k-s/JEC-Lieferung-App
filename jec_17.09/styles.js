import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004E64',  // Background color
    padding: 10,
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  categoryButton: {
    padding: 10,
    backgroundColor: '#9FFFCB',
    borderRadius: 5,
  },
  categoryText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#004E64',  // Text color
  },
  activeCategoryText: {
    color: '#DA7597',  // Active category text color
  },
  orderButton: {
    padding: 10,
    backgroundColor: '#DA7597',  // Button background color
    borderRadius: 5,
  },
  orderButtonText: {
    color: '#9FFFCB',  // Button text color
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuSection: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#9FFFCB',  // Title color
    marginBottom: 10,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 10,
    borderRadius: 5,
  },
  menuItemText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#9FFFCB',  // Menu item text color
  },
  footer: {
    padding: 10,
    backgroundColor: '#f8f8f8',
    alignItems: 'center',
    justifyContent: 'center',
  },
  footerText: {
    fontSize: 14,
    textAlign: 'center',
    color: '#DA7597',  // Footer text color
  },
  item: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    padding: 10,
    backgroundColor: '#f8f8f8',
    borderRadius: 8,
  },
  info: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
    color: '#9FFFCB',  // Item name text color
  },
  description: {
    fontSize: 14,
    color: '#9FFFCB',  // Description text color
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#9FFFCB',  // Price text color
  },
  addButton: {
    padding: 10,
    backgroundColor: '#DA7597',
    borderRadius: 5,
  },
  addButtonText: {
    color: '#9FFFCB',
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default styles;
