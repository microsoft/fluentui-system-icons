package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.BorderAll20: ImageVector
  get() {
    if (_borderAll20 != null) {
      return _borderAll20!!
    }
    _borderAll20 = fluentIcon(name = "Filled.BorderAll20", 20f) {
      materialPath {
          moveTo(6.25F, 4.5F)
          curveTo(5.284F, 4.5F, 4.5F, 5.284F, 4.5F, 6.25F)
          verticalLineToRelative(3.0F)
          horizontalLineToRelative(4.75F)
          verticalLineTo(4.5F)
          horizontalLineToRelative(-3.0F)
          close()
          moveToRelative(4.5F, 0.0F)
          verticalLineToRelative(4.75F)
          horizontalLineToRelative(4.75F)
          verticalLineToRelative(-3.0F)
          curveToRelative(0.0F, -0.966F, -0.784F, -1.75F, -1.75F, -1.75F)
          horizontalLineToRelative(-3.0F)
          close()
          moveToRelative(4.75F, 6.25F)
          horizontalLineToRelative(-4.75F)
          verticalLineToRelative(4.75F)
          horizontalLineToRelative(3.0F)
          curveToRelative(0.966F, 0.0F, 1.75F, -0.784F, 1.75F, -1.75F)
          verticalLineToRelative(-3.0F)
          close()
          moveTo(9.25F, 15.5F)
          verticalLineToRelative(-4.75F)
          horizontalLineTo(4.5F)
          verticalLineToRelative(3.0F)
          curveToRelative(0.0F, 0.966F, 0.784F, 1.75F, 1.75F, 1.75F)
          horizontalLineToRelative(3.0F)
          close()
          moveTo(3.0F, 6.25F)
          curveTo(3.0F, 4.455F, 4.455F, 3.0F, 6.25F, 3.0F)
          horizontalLineToRelative(7.5F)
          curveTo(15.545F, 3.0F, 17.0F, 4.455F, 17.0F, 6.25F)
          verticalLineToRelative(7.5F)
          curveToRelative(0.0F, 1.795F, -1.455F, 3.25F, -3.25F, 3.25F)
          horizontalLineToRelative(-7.5F)
          curveTo(4.455F, 17.0F, 3.0F, 15.545F, 3.0F, 13.75F)
          verticalLineToRelative(-7.5F)
          close()        
      }
    }
    return _borderAll20!!
  }

private var _borderAll20: ImageVector? = null
