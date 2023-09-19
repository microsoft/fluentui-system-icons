package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.LeafOne32: ImageVector
  get() {
    if (_leafOne32 != null) {
      return _leafOne32!!
    }
    _leafOne32 = fluentIcon(name = "Regular.LeafOne32", 32f) {
      materialPath {
          moveTo(17.95F, 3.808F)
          curveToRelative(-1.077F, -1.077F, -2.823F, -1.077F, -3.9F, 0.0F)
          lineToRelative(-5.121F, 5.12F)
          curveToRelative(-3.905F, 3.906F, -3.905F, 10.238F, 0.0F, 14.143F)
          curveToRelative(1.698F, 1.698F, 3.854F, 2.658F, 6.071F, 2.879F)
          verticalLineTo(29.0F)
          curveToRelative(0.0F, 0.553F, 0.448F, 1.0F, 1.0F, 1.0F)
          reflectiveCurveToRelative(1.0F, -0.447F, 1.0F, -1.0F)
          verticalLineToRelative(-3.05F)
          curveToRelative(2.216F, -0.221F, 4.373F, -1.181F, 6.071F, -2.88F)
          curveToRelative(3.905F, -3.904F, 3.905F, -10.236F, 0.0F, -14.141F)
          lineTo(17.95F, 3.808F)
          close()
          moveTo(17.0F, 23.938F)
          verticalLineTo(15.0F)
          curveToRelative(0.0F, -0.552F, -0.448F, -1.0F, -1.0F, -1.0F)
          reflectiveCurveToRelative(-1.0F, 0.448F, -1.0F, 1.0F)
          verticalLineToRelative(8.938F)
          curveToRelative(-1.703F, -0.214F, -3.35F, -0.974F, -4.657F, -2.281F)
          curveToRelative(-3.124F, -3.125F, -3.124F, -8.19F, 0.0F, -11.314F)
          lineToRelative(5.121F, -5.121F)
          curveToRelative(0.296F, -0.296F, 0.776F, -0.296F, 1.072F, 0.0F)
          lineToRelative(5.12F, 5.121F)
          curveToRelative(3.125F, 3.124F, 3.125F, 8.19F, 0.0F, 11.314F)
          curveToRelative(-1.306F, 1.307F, -2.953F, 2.067F, -4.656F, 2.28F)
          close()        
      }
    }
    return _leafOne32!!
  }

private var _leafOne32: ImageVector? = null
