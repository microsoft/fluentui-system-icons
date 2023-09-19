package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.PersonLightbulb20: ImageVector
  get() {
    if (_personLightbulb20 != null) {
      return _personLightbulb20!!
    }
    _personLightbulb20 = fluentIcon(name = "Filled.PersonLightbulb20", 20f) {
      materialPath {
          moveTo(6.0F, 6.0F)
          curveToRelative(0.0F, -2.21F, 1.79F, -4.0F, 4.0F, -4.0F)
          reflectiveCurveToRelative(4.0F, 1.79F, 4.0F, 4.0F)
          reflectiveCurveToRelative(-1.79F, 4.0F, -4.0F, 4.0F)
          reflectiveCurveToRelative(-4.0F, -1.79F, -4.0F, -4.0F)
          close()
          moveToRelative(-3.0F, 7.0F)
          curveToRelative(0.0F, -1.113F, 0.903F, -2.0F, 2.009F, -2.0F)
          horizontalLineToRelative(6.526F)
          curveTo(11.195F, 11.588F, 11.0F, 12.271F, 11.0F, 13.0F)
          curveToRelative(0.0F, 1.21F, 0.538F, 2.295F, 1.386F, 3.027F)
          lineToRelative(0.332F, 1.66F)
          curveTo(11.874F, 17.898F, 10.954F, 18.0F, 10.0F, 18.0F)
          curveToRelative(-1.855F, 0.0F, -3.583F, -0.386F, -4.865F, -1.203F)
          curveTo(3.833F, 15.967F, 3.0F, 14.69F, 3.0F, 13.0F)
          close()
          moveToRelative(15.0F, 0.0F)
          curveToRelative(0.0F, 1.023F, -0.512F, 1.926F, -1.294F, 2.468F)
          lineTo(16.6F, 16.0F)
          horizontalLineToRelative(-3.2F)
          lineToRelative(-0.107F, -0.532F)
          curveTo(12.512F, 14.926F, 12.0F, 14.023F, 12.0F, 13.0F)
          curveToRelative(0.0F, -1.657F, 1.343F, -3.0F, 3.0F, -3.0F)
          reflectiveCurveToRelative(3.0F, 1.343F, 3.0F, 3.0F)
          close()
          moveToRelative(-4.4F, 4.0F)
          lineToRelative(0.24F, 1.196F)
          curveTo(13.932F, 18.663F, 14.342F, 19.0F, 14.82F, 19.0F)
          horizontalLineToRelative(0.36F)
          curveToRelative(0.477F, 0.0F, 0.887F, -0.337F, 0.98F, -0.804F)
          lineTo(16.4F, 17.0F)
          horizontalLineToRelative(-2.8F)
          close()        
      }
    }
    return _personLightbulb20!!
  }

private var _personLightbulb20: ImageVector? = null
