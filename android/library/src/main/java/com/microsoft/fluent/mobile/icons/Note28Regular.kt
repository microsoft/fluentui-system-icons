package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.Note28: ImageVector
  get() {
    if (_note28 != null) {
      return _note28!!
    }
    _note28 = fluentIcon(name = "Regular.Note28", 28f) {
      materialPath {
          moveTo(6.75F, 3.0F)
          curveTo(4.679F, 3.0F, 3.0F, 4.679F, 3.0F, 6.75F)
          verticalLineToRelative(14.5F)
          curveTo(3.0F, 23.321F, 4.679F, 25.0F, 6.75F, 25.0F)
          horizontalLineToRelative(8.507F)
          curveToRelative(0.995F, 0.0F, 1.949F, -0.395F, 2.652F, -1.098F)
          lineToRelative(5.993F, -5.993F)
          curveTo(24.605F, 17.206F, 25.0F, 16.252F, 25.0F, 15.257F)
          verticalLineTo(6.75F)
          curveTo(25.0F, 4.679F, 23.321F, 3.0F, 21.25F, 3.0F)
          horizontalLineTo(6.75F)
          close()
          moveTo(4.5F, 6.75F)
          curveToRelative(0.0F, -1.243F, 1.007F, -2.25F, 2.25F, -2.25F)
          horizontalLineToRelative(14.5F)
          curveToRelative(1.243F, 0.0F, 2.25F, 1.007F, 2.25F, 2.25F)
          verticalLineTo(15.0F)
          horizontalLineToRelative(-4.75F)
          curveTo(16.679F, 15.0F, 15.0F, 16.679F, 15.0F, 18.75F)
          verticalLineToRelative(4.75F)
          horizontalLineTo(6.75F)
          curveToRelative(-1.243F, 0.0F, -2.25F, -1.007F, -2.25F, -2.25F)
          verticalLineTo(6.75F)
          close()
          moveToRelative(12.0F, 16.376F)
          verticalLineTo(18.75F)
          curveToRelative(0.0F, -1.243F, 1.007F, -2.25F, 2.25F, -2.25F)
          horizontalLineToRelative(4.376F)
          curveToRelative(-0.083F, 0.124F, -0.178F, 0.241F, -0.285F, 0.348F)
          lineToRelative(-5.993F, 5.993F)
          curveToRelative(-0.107F, 0.107F, -0.224F, 0.202F, -0.348F, 0.285F)
          close()        
      }
    }
    return _note28!!
  }

private var _note28: ImageVector? = null
