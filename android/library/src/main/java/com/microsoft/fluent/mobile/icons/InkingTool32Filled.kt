package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.InkingTool32: ImageVector
  get() {
    if (_inkingTool32 != null) {
      return _inkingTool32!!
    }
    _inkingTool32 = fluentIcon(name = "Filled.InkingTool32", 32f) {
      materialPath {
          moveTo(4.018F, 2.0F)
          curveToRelative(-1.105F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          verticalLineToRelative(0.812F)
          curveTo(2.006F, 4.873F, 2.0F, 4.936F, 2.0F, 5.0F)
          verticalLineToRelative(2.0F)
          curveToRelative(0.0F, 1.657F, 1.343F, 3.0F, 3.0F, 3.0F)
          horizontalLineToRelative(0.504F)
          lineToRelative(0.003F, 0.005F)
          horizontalLineToRelative(20.986F)
          lineTo(26.496F, 10.0F)
          horizontalLineTo(27.0F)
          curveToRelative(1.657F, 0.0F, 3.0F, -1.343F, 3.0F, -3.0F)
          verticalLineTo(4.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(4.018F)
          close()
          moveToRelative(9.0F, 24.0F)
          curveToRelative(0.021F, 0.82F, 0.216F, 1.716F, 0.622F, 2.454F)
          curveToRelative(0.429F, 0.78F, 1.195F, 1.535F, 2.344F, 1.55F)
          horizontalLineToRelative(0.032F)
          curveToRelative(1.148F, -0.015F, 1.915F, -0.77F, 2.344F, -1.55F)
          curveToRelative(0.406F, -0.738F, 0.6F, -1.634F, 0.622F, -2.454F)
          horizontalLineToRelative(-5.964F)
          close()
          moveToRelative(6.942F, -3.096F)
          lineToRelative(5.52F, -10.899F)
          horizontalLineTo(6.52F)
          lineToRelative(5.514F, 10.898F)
          curveTo(12.374F, 23.576F, 13.063F, 24.0F, 13.819F, 24.0F)
          horizontalLineToRelative(4.358F)
          curveToRelative(0.754F, 0.0F, 1.443F, -0.424F, 1.784F, -1.096F)
          close()        
      }
    }
    return _inkingTool32!!
  }

private var _inkingTool32: ImageVector? = null
