import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#004E64',
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
    color: '#004E64',
  },
  activeCategoryText: {
    color: '#DA7597',
  },
  orderButton: {
    padding: 10,
    backgroundColor: '#DA7597',
    borderRadius: 5,
  },
  orderButtonText: {
    color: '#9FFFCB',
    fontSize: 16,
    fontWeight: 'bold',
  },
  menuSection: {
    flex: 1,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#9FFFCB',
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
    color: '#9FFFCB',
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
    color: '#DA7597',
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
    color: '#9FFFCB',
  },
  description: {
    fontSize: 14,
    color: '#9FFFCB',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#9FFFCB',
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
  cartButton: {
    padding: 15,
    backgroundColor: '#DA7597',
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  cartButtonText: {
    color: '#9FFFCB',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cartButton: {
    padding: 15,
    backgroundColor: '#DA7597',
    borderRadius: 5,
    marginTop: 20,
    alignItems: 'center',
  },
  cartButtonText: {
    color: '#9FFFCB',
    fontWeight: 'bold',
    fontSize: 16,
  },
});

export default styles;
