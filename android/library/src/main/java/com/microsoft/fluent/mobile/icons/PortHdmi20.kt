package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PortHdmi20: ImageVector
  get() {
    if (_portHdmi20 != null) {
      return _portHdmi20!!
    }
    _portHdmi20 = fluentIcon(name = "Filled.PortHdmi20", 20f) {
      materialPath {
          moveTo(4.854F, 7.44F)
          curveTo(5.134F, 7.157F, 5.516F, 7.0F, 5.914F, 7.0F)
          horizontalLineToRelative(8.172F)
          curveToRelative(0.398F, 0.0F, 0.78F, 0.158F, 1.06F, 0.44F)
          lineToRelative(2.415F, 2.413F)
          curveTo(17.842F, 10.136F, 18.0F, 10.517F, 18.0F, 10.915F)
          verticalLineTo(11.5F)
          curveToRelative(0.0F, 0.828F, -0.672F, 1.5F, -1.5F, 1.5F)
          horizontalLineToRelative(-13.0F)
          curveTo(2.672F, 13.0F, 2.0F, 12.328F, 2.0F, 11.5F)
          verticalLineToRelative(-0.586F)
          curveToRelative(0.0F, -0.398F, 0.158F, -0.78F, 0.44F, -1.06F)
          lineToRelative(2.414F, -2.415F)
          close()
          moveTo(6.5F, 9.5F)
          curveTo(6.224F, 9.5F, 6.0F, 9.724F, 6.0F, 10.0F)
          reflectiveCurveToRelative(0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          reflectiveCurveToRelative(-0.224F, -0.5F, -0.5F, -0.5F)
          horizontalLineToRelative(-7.0F)
          close()        
      }
    }
    return _portHdmi20!!
  }

private var _portHdmi20: ImageVector? = null
