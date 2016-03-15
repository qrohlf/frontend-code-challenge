JADE_PATH=node_modules/.bin/jade-amd

KARMA_CONF_PATH=tests/karma.conf.js
KARMA_PATH=node_modules/.bin/karma

SASS_PATH=node_modules/.bin/node-sass
SASS_SRC_PATH=public/stylesheets/main.scss
SASS_DST_PATH=public/stylesheets/main.css

SERVER_PATH=app/server.js

VENDOR_PATH=public/js/vendor
VENDOR_FILES=\
	node_modules/backbone/backbone.js\
	node_modules/backbone.marionette/lib/backbone.marionette.js\
	node_modules/jquery/dist/jquery.js\
	node_modules/requirejs/require.js\
	node_modules/spin/dist/spin.js\
	node_modules/underscore/underscore.js\

all:\
	npm\
	build\

build:\
	vendor\
	jade\
	sass\

clean:
	rm -rf public/js/**/*.tpl.js
	rm -rf public/js/vendor
	rm -rf public/stylesheets/main.css

distclean: clean
	rm -rf node_modules

jade:\
	jade-runtime\
	jade-templates\

jade-runtime: $(VENDOR_PATH)
	$(JADE_PATH) --runtime > $(VENDOR_PATH)/jade_runtime.js

jade-templates:
	$(JADE_PATH) --from public/js/ --to public/js/

npm:
	npm install

sass:
	$(SASS_PATH) --output-style compressed $(SASS_SRC_PATH) $(SASS_DST_PATH)

server:
	node $(SERVER_PATH)

test:
	$(KARMA_PATH) start $(KARMA_CONF_PATH)

vendor: $(VENDOR_PATH) vendor-copy

vendor-copy:
	cp -f $(VENDOR_FILES) $(VENDOR_PATH)

$(VENDOR_PATH):
	mkdir -p $@
