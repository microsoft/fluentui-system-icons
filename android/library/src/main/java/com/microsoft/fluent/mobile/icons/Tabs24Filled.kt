package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.Tabs24: ImageVector
  get() {
    if (_tabs24 != null) {
      return _tabs24!!
    }
    _tabs24 = fluentIcon(name = "Filled.Tabs24", 24f) {
      materialPath {
          moveTo(2.0F, 9.25F)
          curveTo(2.0F, 5.246F, 5.246F, 2.0F, 9.25F, 2.0F)
          horizontalLineToRelative(3.5F)
          curveToRelative(1.352F, 0.0F, 2.511F, 0.825F, 3.0F, 2.0F)
          horizontalLineToRelative(-5.5F)
          curveTo(6.798F, 4.0F, 4.0F, 6.798F, 4.0F, 10.25F)
          verticalLineToRelative(5.5F)
          curveToRelative(-1.175F, -0.49F, -2.0F, -1.648F, -2.0F, -3.0F)
          verticalLineToRelative(-3.5F)
          close()
          moveToRelative(3.0F, 1.0F)
          curveTo(5.0F, 7.35F, 7.35F, 5.0F, 10.25F, 5.0F)
          horizontalLineToRelative(5.5F)
          curveToRelative(1.352F, 0.0F, 2.511F, 0.825F, 3.0F, 2.0F)
          horizontalLineToRelative(-7.5F)
          curveTo(8.903F, 7.0F, 7.0F, 8.903F, 7.0F, 11.25F)
          verticalLineToRelative(7.5F)
          curveToRelative(-1.175F, -0.49F, -2.0F, -1.648F, -2.0F, -3.0F)
          verticalLineToRelative(-5.5F)
          close()
          moveTo(11.25F, 8.0F)
          curveTo(9.455F, 8.0F, 8.0F, 9.455F, 8.0F, 11.25F)
          verticalLineToRelative(7.5F)
          curveTo(8.0F, 20.545F, 9.455F, 22.0F, 11.25F, 22.0F)
          horizontalLineToRelative(7.5F)
          curveToRelative(1.795F, 0.0F, 3.25F, -1.455F, 3.25F, -3.25F)
          verticalLineToRelative(-7.5F)
          curveTo(22.0F, 9.455F, 20.545F, 8.0F, 18.75F, 8.0F)
          horizontalLineToRelative(-7.5F)
          close()        
      }
    }
    return _tabs24!!
  }

private var _tabs24: ImageVector? = null
