import { StyleSheet } from "react-native"; 

export const Top = StyleSheet.create({ 

  socialContainer: { 
    flexDirection: "row", 
    justifyContent: "space-around", 
    alignItems: "center", 
    backgroundColor: "#000000ff", 
    paddingVertical: 12, 
    borderBottomWidth: 2, 
    borderBottomColor: "#C00000", 
    zIndex: 30,
    elevation: 30,
  }, 
  headersup: { 
    flexDirection: "row", 
    backgroundColor: "#000", 
    paddingVertical: 15, 
    paddingHorizontal: 20, 
    borderBottomWidth: 3, 
    borderBottomColor: "#C00000", 
    alignItems: "center", 
    justifyContent: "center", 
    zIndex: 10,
    elevation: 10,
  }, 
  titleright: { 
    fontSize: 24, 
    fontWeight: "bold", 
    color: "#fff", 
    textTransform: "uppercase", 
    textAlign: "right", 
  }, 
  welcome: { 
    color: "#fff", 
    fontSize: 18, 
    textAlign: "center", 
    marginTop: 20, 
  }, 
  email: { 
    color: "#ccc", 
    fontSize: 16, 
    textAlign: "center", 
    marginTop: 10, 
  }, 
  loginTypeBadge: { 
    alignSelf: "center", 
    marginTop: 20, 
    paddingVertical: 6, 
    paddingHorizontal: 14, 
    borderRadius: 12, 
  }, 
  googleBadge: { 
    backgroundColor: "#DB4437", 
  }, 
  emailBadge: { 
    backgroundColor: "#1E90FF", 
  }, 
  loginTypeText: { 
    color: "#fff", 
    fontWeight: "bold", 
  }, 
  Logo: { 
    width: 35, 
    height: 35, 
  }, 
    searchContainer: {
    flexDirection: 'row' as 'row',
    alignItems: 'center' as 'center',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#f8f8f8',
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  
  searchInputContainer: {
    flex: 1,
    flexDirection: 'row' as 'row',
    alignItems: 'center' as 'center',
    backgroundColor: '#fff',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#ddd',
    paddingHorizontal: 10,
    marginRight: 10,
  },
  
  searchIcon: {
    marginRight: 8,
  },
  
  searchInput: {
    flex: 1,
    height: 40,
    fontSize: 16,
    color: '#333',
  },
  
  clearButton: {
    padding: 4,
  },
  
  searchButton: {
    backgroundColor: '#C00000', // Vermelho do Vasco
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 8,
    minWidth: 60,
    alignItems: 'center' as 'center',
  },
  
  searchButtonText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold' as 'bold',
  },
}); 