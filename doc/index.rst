.. basicmathasaservice.de documentation master file

Welcome to basicmathasaservice.de!
==================================================

basicmathasaservice.de is a service that helps your applications to do basic mathematic operations!

It has a very simple JSON API, for example if you want to add two numbers:

.. code-block:: bash

   $ curl https://basicmathasaservice.de/api/add?augend=1&addend=2

   {"augend":1,"addend":2,"result":3,"status":"OK"}

For a complete API documentation, please refer to :doc:`api`

The code is Free Software and available on `GitHub <https://github.com/adnidor/basicmathasaservice>`_

.. toctree::
   :hidden:
   :glob:

   *
