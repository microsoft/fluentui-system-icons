package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Phone24: ImageVector
  get() {
    if (_phone24 != null) {
      return _phone24!!
    }
    _phone24 = fluentIcon(name = "Regular.Phone24", 24f) {
      materialPath {
          moveTo(15.75F, 2.0F)
          curveTo(16.993F, 2.0F, 18.0F, 3.007F, 18.0F, 4.25F)
          verticalLineToRelative(15.5F)
          curveToRelative(0.0F, 1.243F, -1.007F, 2.25F, -2.25F, 2.25F)
          horizontalLineToRelative(-7.5F)
          curveTo(7.007F, 22.0F, 6.0F, 20.993F, 6.0F, 19.75F)
          verticalLineTo(4.25F)
          curveTo(6.0F, 3.007F, 7.007F, 2.0F, 8.25F, 2.0F)
          horizontalLineToRelative(7.5F)
          close()
          moveToRelative(0.0F, 1.5F)
          horizontalLineToRelative(-7.5F)
          curveTo(7.836F, 3.5F, 7.5F, 3.836F, 7.5F, 4.25F)
          verticalLineToRelative(15.5F)
          curveToRelative(0.0F, 0.414F, 0.336F, 0.75F, 0.75F, 0.75F)
          horizontalLineToRelative(7.5F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.336F, 0.75F, -0.75F)
          verticalLineTo(4.25F)
          curveToRelative(0.0F, -0.414F, -0.336F, -0.75F, -0.75F, -0.75F)
          close()
          moveToRelative(-2.501F, 14.0F)
          curveToRelative(0.414F, 0.0F, 0.75F, 0.335F, 0.751F, 0.749F)
          curveToRelative(0.0F, 0.414F, -0.335F, 0.75F, -0.749F, 0.751F)
          lineToRelative(-2.5F, 0.004F)
          curveToRelative(-0.414F, 0.0F, -0.75F, -0.335F, -0.751F, -0.75F)
          curveToRelative(0.0F, -0.413F, 0.335F, -0.75F, 0.749F, -0.75F)
          lineToRelative(2.5F, -0.004F)
          close()        
      }
    }
    return _phone24!!
  }

private var _phone24: ImageVector? = null
