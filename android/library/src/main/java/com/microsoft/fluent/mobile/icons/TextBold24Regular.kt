package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.TextBold24: ImageVector
  get() {
    if (_textBold24 != null) {
      return _textBold24!!
    }
    _textBold24 = fluentIcon(name = "Regular.TextBold24", 24f) {
      materialPath {
          moveTo(6.935F, 4.44F)
          curveTo(7.217F, 4.158F, 7.598F, 4.0F, 7.996F, 4.0F)
          horizontalLineToRelative(4.383F)
          curveTo(15.017F, 4.0F, 17.0F, 6.182F, 17.0F, 8.625F)
          curveToRelative(0.0F, 0.977F, -0.316F, 1.912F, -0.865F, 2.682F)
          curveTo(17.211F, 12.134F, 18.0F, 13.427F, 18.0F, 15.12F)
          curveToRelative(0.0F, 3.112F, -2.7F, 4.88F, -4.88F, 4.88F)
          horizontalLineTo(8.0F)
          curveToRelative(-0.829F, 0.0F, -1.5F, -0.672F, -1.5F, -1.5F)
          lineToRelative(-0.004F, -13.0F)
          curveToRelative(0.0F, -0.397F, 0.158F, -0.779F, 0.44F, -1.06F)
          close()
          moveTo(9.5F, 10.25F)
          horizontalLineToRelative(2.88F)
          curveToRelative(0.903F, 0.0F, 1.62F, -0.76F, 1.62F, -1.625F)
          reflectiveCurveTo(13.281F, 7.0F, 12.38F, 7.0F)
          horizontalLineTo(9.498F)
          lineTo(9.5F, 10.25F)
          close()
          moveToRelative(0.0F, 3.0F)
          verticalLineTo(17.0F)
          horizontalLineToRelative(3.62F)
          curveToRelative(0.874F, 0.0F, 1.88F, -0.754F, 1.88F, -1.88F)
          curveToRelative(0.0F, -1.13F, -0.974F, -1.87F, -1.88F, -1.87F)
          horizontalLineTo(9.5F)
          close()        
      }
    }
    return _textBold24!!
  }

private var _textBold24: ImageVector? = null
