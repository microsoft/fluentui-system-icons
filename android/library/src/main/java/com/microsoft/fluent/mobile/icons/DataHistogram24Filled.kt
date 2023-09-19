package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.DataHistogram24: ImageVector
  get() {
    if (_dataHistogram24 != null) {
      return _dataHistogram24!!
    }
    _dataHistogram24 = fluentIcon(name = "Filled.DataHistogram24", 24f) {
      materialPath {
          moveTo(9.0F, 5.23F)
          curveToRelative(0.0F, -1.242F, 1.007F, -2.25F, 2.25F, -2.25F)
          horizontalLineToRelative(1.5F)
          curveToRelative(1.243F, 0.0F, 2.25F, 1.008F, 2.25F, 2.25F)
          verticalLineTo(21.0F)
          horizontalLineTo(9.0F)
          verticalLineTo(5.23F)
          close()
          moveTo(7.5F, 10.0F)
          horizontalLineTo(5.25F)
          curveTo(4.007F, 10.0F, 3.0F, 11.009F, 3.0F, 12.25F)
          verticalLineToRelative(8.0F)
          curveTo(3.0F, 20.665F, 3.336F, 21.0F, 3.75F, 21.0F)
          horizontalLineTo(7.5F)
          verticalLineTo(10.0F)
          close()
          moveToRelative(9.0F, 11.0F)
          horizontalLineToRelative(3.75F)
          curveToRelative(0.414F, 0.0F, 0.75F, -0.335F, 0.75F, -0.75F)
          verticalLineToRelative(-11.0F)
          curveTo(21.0F, 8.009F, 19.993F, 7.0F, 18.75F, 7.0F)
          horizontalLineTo(16.5F)
          verticalLineToRelative(14.0F)
          close()        
      }
    }
    return _dataHistogram24!!
  }

private var _dataHistogram24: ImageVector? = null
