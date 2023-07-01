package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Comment24: ImageVector
  get() {
    if (_comment24 != null) {
      return _comment24!!
    }
    _comment24 = fluentIcon(name = "Regular.Comment24", 24f) {
      materialPath {
          moveTo(5.25F, 18.0F)
          curveTo(3.455F, 18.0F, 2.0F, 16.545F, 2.0F, 14.75F)
          verticalLineToRelative(-8.5F)
          curveTo(2.0F, 4.455F, 3.455F, 3.0F, 5.25F, 3.0F)
          horizontalLineToRelative(13.5F)
          curveTo(20.545F, 3.0F, 22.0F, 4.455F, 22.0F, 6.25F)
          verticalLineToRelative(8.5F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineToRelative(-5.738F)
          lineTo(8.0F, 21.75F)
          curveToRelative(-0.553F, 0.414F, -1.337F, 0.301F, -1.75F, -0.252F)
          curveTo(6.087F, 21.282F, 6.0F, 21.02F, 6.0F, 20.75F)
          verticalLineTo(18.0F)
          horizontalLineTo(5.25F)
          close()
          moveToRelative(7.264F, -1.5F)
          horizontalLineToRelative(6.236F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineToRelative(-8.5F)
          curveToRelative(0.0F, -0.966F, -0.784F, -1.75F, -1.75F, -1.75F)
          horizontalLineTo(5.25F)
          curveTo(4.284F, 4.5F, 3.5F, 5.284F, 3.5F, 6.25F)
          verticalLineToRelative(8.5F)
          curveToRelative(0.0F, 0.966F, 0.784F, 1.75F, 1.75F, 1.75F)
          horizontalLineToRelative(2.249F)
          verticalLineToRelative(3.75F)
          lineToRelative(5.015F, -3.75F)
          close()        
      }
    }
    return _comment24!!
  }

private var _comment24: ImageVector? = null
