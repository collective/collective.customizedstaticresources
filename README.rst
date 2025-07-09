.. This README is meant for consumption by humans and PyPI. PyPI can render rst files so please do not use Sphinx features.
   If you want to learn more about writing documentation, please check out: http://docs.plone.org/about/documentation_styleguide.html
   This text does not appear on PyPI or github. It is a comment.

====================================
collective.customizedstaticresources
====================================

Example package to show how to customize staticresources (aka mockup patterns).

It provides a basic ``webpack`` configuration and includes ``@plone/mockup``.

The bundle is build the same as in [plone/mockup](https://github.com/plone/mockup).

The ``Makefile`` is a copy of https://github.com/plone/plone.staticresources/blob/master/Makefile but without the icon generation.

If you want to use your custom icon-set please have a look there how to implement it.


How to
------

As an example we customize the ``pat-tinymce`` pattern here:

1. Copy the original pattern code into ``resources/js/pat/<customized pattern>`` directory and customize the code.
2. Change the import in ``resources/patterns.js`` to the new local path.
3. Compile the bundle with ``make build``.
4. (re)install this package in the addons controlpanel.

A second example shows how to customize the ``SelectedItem.svelte`` component.

See ``resources/js/pat/contentbrowser/components``.

Installation
------------

Install collective.customizedstaticresources by adding it to your buildout::

    [buildout]

    ...

    eggs =
        collective.customizedstaticresources


and then running ``bin/buildout``


Authors
-------

Peter Mathis @petschki


License
-------

The project is licensed under the GPLv2.
