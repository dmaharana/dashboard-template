package main

import (
	"fmt"
	"log"
	"net/http"
)

func main() {
	log.Println("Starting server")

	mux := http.NewServeMux()

	// GET /comment
	mux.HandleFunc("GET /comment", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Returns the comment")
	})

	// GET /comment/:id
	mux.HandleFunc("GET /comment/{id}", func(w http.ResponseWriter, r *http.Request) {
		id := r.PathValue("id")
		fmt.Fprintf(w, "Returns a single comment for id %s", id)
	})

	// POST /comment
	mux.HandleFunc("POST /comment", func(w http.ResponseWriter, r *http.Request) {
		fmt.Fprintf(w, "Adds a new comment")
	})

	if err := http.ListenAndServe(":8080", mux); err != nil {
		log.Fatal(err)
	}
}
