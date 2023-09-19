package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Trophy16: ImageVector
  get() {
    if (_trophy16 != null) {
      return _trophy16!!
    }
    _trophy16 = fluentIcon(name = "Filled.Trophy16", 16f) {
      materialPath {
          moveTo(3.999F, 3.0F)
          horizontalLineTo(3.496F)
          curveToRelative(-0.828F, 0.0F, -1.5F, 0.672F, -1.5F, 1.5F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 1.252F, 0.922F, 2.288F, 2.122F, 2.471F)
          curveToRelative(0.394F, 1.583F, 1.732F, 2.792F, 3.381F, 2.998F)
          verticalLineTo(12.0F)
          horizontalLineToRelative(-1.5F)
          curveToRelative(-1.104F, 0.0F, -2.0F, 0.895F, -2.0F, 2.0F)
          verticalLineToRelative(0.504F)
          curveToRelative(0.0F, 0.276F, 0.224F, 0.5F, 0.5F, 0.5F)
          horizontalLineToRelative(7.0F)
          curveToRelative(0.276F, 0.0F, 0.5F, -0.224F, 0.5F, -0.5F)
          verticalLineTo(14.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineToRelative(-1.5F)
          verticalLineToRelative(-1.03F)
          curveToRelative(1.65F, -0.207F, 2.987F, -1.416F, 3.381F, -2.999F)
          curveTo(13.08F, 7.787F, 14.0F, 6.751F, 14.0F, 5.5F)
          verticalLineToRelative(-1.0F)
          curveTo(14.0F, 3.672F, 13.329F, 3.0F, 12.5F, 3.0F)
          horizontalLineTo(12.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(6.0F)
          curveTo(4.896F, 1.0F, 4.0F, 1.895F, 4.0F, 3.0F)
          close()
          moveToRelative(8.0F, 1.0F)
          horizontalLineToRelative(0.5F)
          curveToRelative(0.276F, 0.0F, 0.5F, 0.224F, 0.5F, 0.5F)
          verticalLineToRelative(1.0F)
          curveToRelative(0.0F, 0.653F, -0.417F, 1.208F, -1.0F, 1.414F)
          verticalLineTo(4.0F)
          close()
          moveToRelative(-8.0F, 0.0F)
          verticalLineToRelative(2.915F)
          curveTo(3.415F, 6.709F, 2.996F, 6.153F, 2.996F, 5.5F)
          verticalLineToRelative(-1.0F)
          curveToRelative(0.0F, -0.276F, 0.224F, -0.5F, 0.5F, -0.5F)
          horizontalLineTo(4.0F)
          close()        
      }
    }
    return _trophy16!!
  }

private var _trophy16: ImageVector? = null
