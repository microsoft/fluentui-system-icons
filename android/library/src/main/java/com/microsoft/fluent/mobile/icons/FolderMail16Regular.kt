package com.microsoft.fluent.mobile.icons

import androidx.compose.material.icons.materialPath
import androidx.compose.ui.graphics.vector.ImageVector
import com.microsoft.fluent.mobile.FluentIcons
import com.microsoft.fluent.mobile.fluentIcon

public val FluentIcons.Regular.FolderMail16: ImageVector
  get() {
    if (_folderMail16 != null) {
      return _folderMail16!!
    }
    _folderMail16 = fluentIcon(name = "Regular.FolderMail16", 16f) {
      materialPath {
          moveTo(2.0F, 4.0F)
          verticalLineToRelative(6.0F)
          curveToRelative(0.0F, 1.105F, 0.895F, 2.0F, 2.0F, 2.0F)
          horizontalLineToRelative(1.0F)
          verticalLineToRelative(-1.0F)
          horizontalLineTo(4.0F)
          curveToRelative(-0.552F, 0.0F, -1.0F, -0.448F, -1.0F, -1.0F)
          verticalLineTo(5.5F)
          horizontalLineToRelative(2.75F)
          curveToRelative(0.124F, 0.0F, 0.244F, -0.046F, 0.336F, -0.13F)
          lineTo(7.593F, 4.0F)
          horizontalLineTo(12.0F)
          curveToRelative(0.552F, 0.0F, 1.0F, 0.448F, 1.0F, 1.0F)
          verticalLineToRelative(2.0F)
          horizontalLineToRelative(0.5F)
          curveToRelative(0.171F, 0.0F, 0.338F, 0.017F, 0.5F, 0.05F)
          verticalLineTo(5.0F)
          curveToRelative(0.0F, -1.105F, -0.895F, -2.0F, -2.0F, -2.0F)
          horizontalLineTo(7.175F)
          lineTo(6.062F, 2.11F)
          curveTo(5.974F, 2.039F, 5.863F, 2.0F, 5.75F, 2.0F)
          horizontalLineTo(4.0F)
          curveTo(2.895F, 2.0F, 2.0F, 2.895F, 2.0F, 4.0F)
          close()
          moveToRelative(1.0F, 0.0F)
          curveToRelative(0.0F, -0.552F, 0.448F, -1.0F, 1.0F, -1.0F)
          horizontalLineToRelative(1.575F)
          lineToRelative(0.868F, 0.695F)
          lineTo(5.557F, 4.5F)
          horizontalLineTo(3.0F)
          verticalLineTo(4.0F)
          close()
          moveToRelative(3.013F, 5.304F)
          lineToRelative(4.497F, 2.623F)
          lineTo(15.0F, 9.509F)
          verticalLineTo(9.5F)
          curveTo(15.0F, 8.672F, 14.328F, 8.0F, 13.5F, 8.0F)
          horizontalLineToRelative(-6.0F)
          curveTo(6.738F, 8.0F, 6.109F, 8.568F, 6.013F, 9.304F)
          close()
          moveTo(15.0F, 10.644F)
          lineToRelative(-4.263F, 2.296F)
          curveToRelative(-0.153F, 0.083F, -0.339F, 0.08F, -0.489F, -0.008F)
          lineTo(6.0F, 10.454F)
          verticalLineTo(13.5F)
          curveTo(6.0F, 14.328F, 6.672F, 15.0F, 7.5F, 15.0F)
          horizontalLineToRelative(6.0F)
          curveToRelative(0.828F, 0.0F, 1.5F, -0.672F, 1.5F, -1.5F)
          verticalLineToRelative(-2.855F)
          close()        
      }
    }
    return _folderMail16!!
  }

private var _folderMail16: ImageVector? = null
