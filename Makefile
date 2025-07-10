YARN   ?= npx yarn

.PHONY: all
all: build

.PHONY: clean
clean:
	# remove mockup from sources
	rm -Rf node_modules
	rm -Rf src/collective/customizedstaticresources/static/bundle-plone/*

install: clean
	$(YARN) install

.PHONY: build
build: install
	$(YARN) run build

.PHONY: watch
watch: install
	$(YARN) run watch

.PHONY: start
start: install
	$(YARN) run start
