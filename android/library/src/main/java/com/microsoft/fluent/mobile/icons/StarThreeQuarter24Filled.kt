package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.StarThreeQuarter24: ImageVector
  get() {
    if (_starThreeQuarter24 != null) {
      return _starThreeQuarter24!!
    }
    _starThreeQuarter24 = fluentIcon(name = "Filled.StarThreeQuarter24", 24f) {
      materialPath {
          moveTo(15.0F, 6.727F)
          lineToRelative(-1.789F, -3.625F)
          curveTo(12.963F, 2.6F, 12.481F, 2.35F, 11.999F, 2.35F)
          curveToRelative(-0.481F, 0.0F, -0.963F, 0.25F, -1.211F, 0.752F)
          lineTo(8.43F, 7.88F)
          lineTo(3.157F, 8.646F)
          curveToRelative(-1.107F, 0.16F, -1.55F, 1.522F, -0.748F, 2.303F)
          lineToRelative(3.815F, 3.719F)
          lineToRelative(-0.9F, 5.25F)
          curveToRelative(-0.15F, 0.874F, 0.544F, 1.583F, 1.331F, 1.582F)
          curveToRelative(0.208F, 0.0F, 0.422F, -0.05F, 0.63F, -0.158F)
          lineToRelative(4.714F, -2.479F)
          lineTo(15.0F, 20.441F)
          verticalLineTo(6.727F)
          close()        
      }
    }
    return _starThreeQuarter24!!
  }

private var _starThreeQuarter24: ImageVector? = null
