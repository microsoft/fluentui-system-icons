package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Prohibited48: ImageVector
  get() {
    if (_prohibited48 != null) {
      return _prohibited48!!
    }
    _prohibited48 = fluentIcon(name = "Filled.Prohibited48", 48f) {
      materialPath {
          moveTo(24.0F, 5.0F)
          curveToRelative(5.118F, 0.0F, 9.763F, 2.023F, 13.179F, 5.313F)
          curveToRelative(0.097F, 0.068F, 0.19F, 0.145F, 0.276F, 0.232F)
          curveToRelative(0.087F, 0.086F, 0.164F, 0.179F, 0.231F, 0.276F)
          curveTo(40.976F, 14.237F, 43.0F, 18.882F, 43.0F, 24.0F)
          curveToRelative(0.0F, 10.493F, -8.507F, 19.0F, -19.0F, 19.0F)
          reflectiveCurveTo(5.0F, 34.493F, 5.0F, 24.0F)
          reflectiveCurveTo(13.507F, 5.0F, 24.0F, 5.0F)
          close()
          moveToRelative(11.927F, 9.902F)
          lineTo(14.902F, 35.927F)
          curveTo(17.426F, 37.855F, 20.58F, 39.0F, 24.0F, 39.0F)
          curveToRelative(8.284F, 0.0F, 15.0F, -6.716F, 15.0F, -15.0F)
          curveToRelative(0.0F, -3.284F, -1.055F, -6.322F, -2.846F, -8.792F)
          lineToRelative(-0.227F, -0.306F)
          close()
          moveTo(24.0F, 9.0F)
          curveTo(15.716F, 9.0F, 9.0F, 15.716F, 9.0F, 24.0F)
          curveToRelative(0.0F, 3.42F, 1.145F, 6.574F, 3.073F, 9.098F)
          lineToRelative(21.025F, -21.025F)
          curveTo(30.574F, 10.145F, 27.42F, 9.0F, 24.0F, 9.0F)
          close()        
      }
    }
    return _prohibited48!!
  }

private var _prohibited48: ImageVector? = null
