import { StyleSheet } from "react-native"; 

export const style = StyleSheet.create({ 
  container: { 
    flex: 1, 
    backgroundColor: "#000000", 
  }, 
  sizesSection: {
    width: "100%",
    paddingHorizontal: 15,
    marginTop: 20,
    marginBottom: 10,
  },
  sizesTitle: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#ffffff",
  },
  sizesContainer: {
    width: "100%",
  },
  sizesContent: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  sizeOption: {
    width: 50,
    height: 50,
    borderRadius: 8,
    marginRight: 8,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 2,
    borderColor: "#666666",
    backgroundColor: "transparent",
    position: "relative",
  },
  sizeOptionSelected: {
    borderColor: "#ffffff",
    backgroundColor: "#333333",
  },
  sizeText: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "600",
  },
  sizeTextSelected: {
    color: "#ffffff",
    fontWeight: "bold",
  },
  sizeCheckmark: {
    position: "absolute",
    top: 2,
    right: 4,
    color: "#4CAF50",
    fontWeight: "bold",
    fontSize: 12,
  },
});