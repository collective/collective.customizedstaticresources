from plone.app.testing import applyProfile
from plone.app.testing import FunctionalTesting
from plone.app.testing import IntegrationTesting
from plone.app.testing import PLONE_FIXTURE
from plone.app.testing import PloneSandboxLayer

import collective.customizedstaticresources


class CollectiveCustomizedstaticresourcesLayer(PloneSandboxLayer):

    defaultBases = (PLONE_FIXTURE,)

    def setUpZope(self, app, configurationContext):
        # Load any other ZCML that is required for your tests.
        # The z3c.autoinclude feature is disabled in the Plone fixture base
        # layer.
        self.loadZCML(package=collective.customizedstaticresources)

    def setUpPloneSite(self, portal):
        applyProfile(portal, "collective.customizedstaticresources:default")


COLLECTIVE_CUSTOMIZEDSTATICRESOURCES_FIXTURE = (
    CollectiveCustomizedstaticresourcesLayer()
)


COLLECTIVE_CUSTOMIZEDSTATICRESOURCES_INTEGRATION_TESTING = IntegrationTesting(
    bases=(COLLECTIVE_CUSTOMIZEDSTATICRESOURCES_FIXTURE,),
    name="CollectiveCustomizedstaticresourcesLayer:IntegrationTesting",
)


COLLECTIVE_CUSTOMIZEDSTATICRESOURCES_FUNCTIONAL_TESTING = FunctionalTesting(
    bases=(COLLECTIVE_CUSTOMIZEDSTATICRESOURCES_FIXTURE,),
    name="CollectiveCustomizedstaticresourcesLayer:FunctionalTesting",
)
