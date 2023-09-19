package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.HomePerson20: ImageVector
  get() {
    if (_homePerson20 != null) {
      return _homePerson20!!
    }
    _homePerson20 = fluentIcon(name = "Filled.HomePerson20", 20f) {
      materialPath {
          moveTo(8.998F, 2.388F)
          curveToRelative(0.57F, -0.512F, 1.434F, -0.512F, 2.005F, 0.0F)
          lineToRelative(5.5F, 4.942F)
          curveTo(16.819F, 7.614F, 17.0F, 8.02F, 17.0F, 8.445F)
          verticalLineToRelative(0.956F)
          curveToRelative(-0.441F, -0.255F, -0.954F, -0.402F, -1.5F, -0.402F)
          curveToRelative(-1.306F, 0.0F, -2.418F, 0.835F, -2.83F, 2.0F)
          horizontalLineTo(8.5F)
          curveTo(8.224F, 11.0F, 8.0F, 11.224F, 8.0F, 11.5F)
          verticalLineToRelative(4.0F)
          curveTo(8.0F, 16.329F, 7.328F, 17.0F, 6.5F, 17.0F)
          horizontalLineToRelative(-2.0F)
          curveTo(3.672F, 17.0F, 3.0F, 16.329F, 3.0F, 15.5F)
          verticalLineTo(8.446F)
          curveTo(3.0F, 8.02F, 3.18F, 7.615F, 3.498F, 7.33F)
          lineToRelative(5.5F, -4.942F)
          close()
          moveTo(17.5F, 12.0F)
          curveToRelative(0.0F, 1.105F, -0.895F, 2.0F, -2.0F, 2.0F)
          reflectiveCurveToRelative(-2.0F, -0.895F, -2.0F, -2.0F)
          curveToRelative(0.0F, -1.104F, 0.895F, -2.0F, 2.0F, -2.0F)
          reflectiveCurveToRelative(2.0F, 0.896F, 2.0F, 2.0F)
          close()
          moveToRelative(1.5F, 4.5F)
          curveToRelative(0.0F, 1.246F, -1.0F, 2.5F, -3.5F, 2.5F)
          reflectiveCurveTo(12.0F, 17.75F, 12.0F, 16.5F)
          curveToRelative(0.0F, -0.828F, 0.672F, -1.5F, 1.5F, -1.5F)
          horizontalLineToRelative(4.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, 0.672F, 1.5F, 1.5F)
          close()        
      }
    }
    return _homePerson20!!
  }

private var _homePerson20: ImageVector? = null
