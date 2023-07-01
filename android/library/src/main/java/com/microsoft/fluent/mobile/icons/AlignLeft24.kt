package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Filled.AlignLeft24: ImageVector
  get() {
    if (_alignLeft24 != null) {
      return _alignLeft24!!
    }
    _alignLeft24 = fluentIcon(name = "Filled.AlignLeft24", 24f) {
      materialPath {
          moveTo(3.0F, 2.75F)
          curveTo(3.0F, 2.336F, 3.336F, 2.0F, 3.75F, 2.0F)
          reflectiveCurveTo(4.5F, 2.336F, 4.5F, 2.75F)
          verticalLineToRelative(18.5F)
          curveTo(4.5F, 21.664F, 4.164F, 22.0F, 3.75F, 22.0F)
          reflectiveCurveTo(3.0F, 21.664F, 3.0F, 21.25F)
          verticalLineTo(2.75F)
          close()
          moveTo(8.25F, 4.0F)
          curveTo(7.007F, 4.0F, 6.0F, 5.007F, 6.0F, 6.25F)
          verticalLineToRelative(2.5F)
          curveTo(6.0F, 9.993F, 7.007F, 11.0F, 8.25F, 11.0F)
          horizontalLineToRelative(10.5F)
          curveTo(19.993F, 11.0F, 21.0F, 9.993F, 21.0F, 8.75F)
          verticalLineToRelative(-2.5F)
          curveTo(21.0F, 5.007F, 19.993F, 4.0F, 18.75F, 4.0F)
          horizontalLineTo(8.25F)
          close()
          moveToRelative(0.0F, 9.0F)
          curveTo(7.007F, 13.0F, 6.0F, 14.007F, 6.0F, 15.25F)
          verticalLineToRelative(2.5F)
          curveTo(6.0F, 18.993F, 7.007F, 20.0F, 8.25F, 20.0F)
          horizontalLineToRelative(7.0F)
          curveToRelative(1.243F, 0.0F, 2.25F, -1.007F, 2.25F, -2.25F)
          verticalLineToRelative(-2.5F)
          curveToRelative(0.0F, -1.243F, -1.007F, -2.25F, -2.25F, -2.25F)
          horizontalLineToRelative(-7.0F)
          close()        
      }
    }
    return _alignLeft24!!
  }

private var _alignLeft24: ImageVector? = null
