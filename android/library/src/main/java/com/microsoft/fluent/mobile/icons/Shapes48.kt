package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Shapes48: ImageVector
  get() {
    if (_shapes48 != null) {
      return _shapes48!!
    }
    _shapes48 = fluentIcon(name = "Regular.Shapes48", 48f) {
      materialPath {
          moveTo(17.5F, 6.5F)
          curveToRelative(-6.075F, 0.0F, -11.0F, 4.925F, -11.0F, 11.0F)
          curveToRelative(0.0F, 5.392F, 3.88F, 9.878F, 9.0F, 10.819F)
          verticalLineToRelative(2.534F)
          curveTo(8.993F, 29.887F, 4.0F, 24.276F, 4.0F, 17.5F)
          curveTo(4.0F, 10.044F, 10.044F, 4.0F, 17.5F, 4.0F)
          curveToRelative(6.776F, 0.0F, 12.387F, 4.993F, 13.353F, 11.5F)
          horizontalLineToRelative(-2.534F)
          curveToRelative(-0.94F, -5.12F, -5.427F, -9.0F, -10.819F, -9.0F)
          close()
          moveTo(23.25F, 18.0F)
          curveToRelative(-2.9F, 0.0F, -5.25F, 2.35F, -5.25F, 5.25F)
          verticalLineToRelative(15.5F)
          curveToRelative(0.0F, 2.9F, 2.35F, 5.25F, 5.25F, 5.25F)
          horizontalLineToRelative(15.5F)
          curveToRelative(2.9F, 0.0F, 5.25F, -2.35F, 5.25F, -5.25F)
          verticalLineToRelative(-15.5F)
          curveToRelative(0.0F, -2.9F, -2.35F, -5.25F, -5.25F, -5.25F)
          horizontalLineToRelative(-15.5F)
          close()
          moveToRelative(-2.75F, 5.25F)
          curveToRelative(0.0F, -1.519F, 1.231F, -2.75F, 2.75F, -2.75F)
          horizontalLineToRelative(15.5F)
          curveToRelative(1.519F, 0.0F, 2.75F, 1.231F, 2.75F, 2.75F)
          verticalLineToRelative(15.5F)
          curveToRelative(0.0F, 1.519F, -1.231F, 2.75F, -2.75F, 2.75F)
          horizontalLineToRelative(-15.5F)
          curveToRelative(-1.519F, 0.0F, -2.75F, -1.231F, -2.75F, -2.75F)
          verticalLineToRelative(-15.5F)
          close()        
      }
    }
    return _shapes48!!
  }

private var _shapes48: ImageVector? = null
